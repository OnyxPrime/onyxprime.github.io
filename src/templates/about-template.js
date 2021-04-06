import { RichTextElement } from "@kentico/gatsby-kontent-components/dist/rich-text-element"
import { graphql } from 'gatsby'
import { node } from "prop-types"
import React from "react"
import Layout from "../components/layout"
// import Img from "gatsby-image"
import { GatsbyImage, getImageData, getImage, generateImageData, getLowResolutionImageURL } from "gatsby-plugin-image"
const generateImageSource = (baseURL, width, height, format, fit, options) => {
    const src = `${baseURL}`
    console.log("baseUrl:" + src)
    return { src, width, height, format }
  } 


  const resolveGatsbyImageData = async (image, options) => {
     // The `image` argument is the node to which you are attaching the resolver,
     // so the values will depend on your data type.
    const filename = image.url
  
    const sourceMetadata = {
      width: image.width,
      height: image.height,
      // In this example, the node has a value like "image/png", which needs
      // converting to a value such as "png". If this omitted, the function will
      // attempt to work it out from the file extension.
      //format: image.mimeType.split("/")[1]
    }
  
    const imageDataArgs = {
      ...options,
      // Passing the plugin name allows for better error messages
      pluginName: `gatsby-custom-code`,
      sourceMetadata,
      filename,
      //placeholderURL,
      generateImageSource,
      options,
    }
  
    // Generating placeholders is optional, but recommended
    //if(options.placeholder === "blurred") {
      // This function returns the URL for a 20px-wide image, to use as a blurred placeholder
      // You need to download the image and convert it to a base64-encoded data URI
      //const lowResImage = getLowResolutionImageURL(imageDataArgs)
  
      // This would be your own function to download and generate a low-resolution placeholder
      //imageDataArgs.placeholderURL =  await getBase64Image(lowResImage)
    //}
  
    // You could also calculate dominant color, and pass that as `backgroundColor`
    // gatsby-plugin-sharp includes helpers that you can use to generate a tracedSVG or calculate
    // the dominant color of a local file, if you don't want to handle it in your plugin
  
  
    return generateImageData(imageDataArgs)
  }

async function getImage2(image) {
    let t = await resolveGatsbyImageData(image);
    return getImage(t);
}

const About = ({data}) => {
    const richTextElement = data.kontentItemAbout.elements.body
    return(
        <Layout>                
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner"> 
                    {/* <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                        <h1 style={{fontWeight: `normal`, color: `#159957`}}>About me</h1>
                        <p>My name is Ryan Overton. I'm a software developer with 10 years of professional experience with Microsoft technologies. I have learned a breadth of development technologies for desktop (WinForms, WPF, UWA, and UWP), web (WebForms, MVC, AngularJs, and Angular), and mobile (Windows CE, Windows Mobile, Windows Phone 7/8/8.1, and Xamarin). I'm a proponent of cloud-based solutions, as well as, environments promoting agility, collaboration, innovation and failure as an option.</p>    
                    </div>                           
                    
                    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                        <p>Since I first made the turtle dance around the screen using Logo, I have had a passion for development and am fortunate I get to do what I love for a living. I'm fortunate enough to have the opportunity to be a remote worker and LOVE it!</p>
                    </div>                           
                    
                    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-center">
                        <img style={{display:`block`, marginLeft: `auto`, marginRight: `auto`, marginBottom: '0', border: `none`}} src="../LogoWriter.png" alt="LOGO programming screen" />
                        <p style={{textAlign: `center`, margin: `0`}}>Logo (http://www.chris-granger.com/2012/10/05/all-ideas-are-old-ideas/)</p>
                    </div>                           
                    
                    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                        <p>I love discussing technology and how it can make our lives better, as well as, experiment with new emerging technologies. If you ever want to chat, or need someone to bounce ideas against, hit me up at any of the links below!</p>
                    </div>                            */}
                    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">                        
                        <RichTextElement 
                            value={richTextElement.value} 
                            images={richTextElement.images}
                            resolveImage={image => {                             
                                return (
                                    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-layout-grid__cell--align-center">                                                                             
                                        <GatsbyImage image={getImage2(image)}
                                            imgStyle={{display:`block`, marginLeft: `auto`, marginRight: `auto`, marginBottom: '0', border: `none`}}                                            
                                            alt={image.description ? image.description : ""}
                                        />                                        
                                        <p style={{textAlign: `center`, margin: `0`}}>{image.description ? image.description : ""}</p>
                                    </div>
                                )
                              }}/>
                    </div>
                </div>
            </div>
        </Layout>
        )
}

export default About;

export const query = 
    graphql`
    query($id: String!) {  
            kontentItemAbout(id: { eq: $id }) {
              id
              elements {
                body {
                  value
                  images {
                    description
                    url
                    image_id
                  }
                }
              }
            }
    }
    `