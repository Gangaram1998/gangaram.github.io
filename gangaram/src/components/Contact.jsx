import {Text,Box,Input,Textarea,Button} from '@chakra-ui/react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact=()=>{
    return <>
    <Box id="Contact" mt={{base:"30", sm:"50",md:"90"}}>
    <Text   fontSize={{base:"2xl", sm:"3xl", md:"5xl"}} as="b" >Let's Connect</Text>
    </Box>
    <Box display={{base:"grid",sm:"grid", md:"flex"}} w="80%" m="auto" mt="20" justifyContent={{base:"center",sm:"center",md:"space-between"}}>
    <Box  w={{base:"100%", sm:"100%", md:"30%"}}>
<Box bg="#000048" m="5" borderRadius={"15"}>
<EmailIcon style={{color:"BB001B"}}/>
<br></br>
<Text as="b" color="white">Email</Text>
<br></br>
<Text as="b"color="white">ramggawade1998@gmail.com</Text>
<br></br>
<Text as="b" color="#2179ab" cursor={"pointer"} onClick={()=>{
        window.open("mailto:ramggawade1998@gmail.com","blank")}}>Send a Message</Text>
</Box>
<Box bg="#000048" m="5" borderRadius={"15"}>
    <WhatsAppIcon style={{color:"#25D366"}} />
    <br></br>
    <Text as="b" color="white">WhatsApp</Text>
    <br></br>
    <Text as="b" color="white">8421361557</Text>
    <br></br>
    <Text as="b" color="#2179ab" cursor={"pointer"} onClick={()=>{
        window.open("https://api.whatsapp.com/send?phone=8421361557","blank")
    }

    }>Send a Message</Text>
</Box>
<Box bg="#000048" m="5" display={"flex"} justifyContent={"space-around"} borderRadius={"15"}>
<Box><GitHubIcon style={{color:"#4078c0"}}/>
    <br></br>
    <Text as="b" color="white">GitHub</Text>
    <br></br>
    <Text as="b" color="white">Gangaram</Text>
    <br></br>
    <Text as="b" color="#2179ab" cursor={"pointer"} onClick={()=>{
        window.open("https://github.com/RationalPrabal","blank")
    }

    }>Connect</Text></Box>
<Box><LinkedInIcon style={{color:"#4078c0"}}/>
    <br></br>
    <Text as="b" color="white">LinkedIn</Text>
    <br></br>
    <Text as="b" color="white">Gangaram</Text>
    <br></br>
    <Text as="b" color="#2179ab" cursor={"pointer"} onClick={()=>{
        window.open("https://www.linkedin.com/in/prabal-%F0%9F%87%AE%F0%9F%87%B3-690190155/","blank")
    }

    }>Connect</Text></Box>
</Box>
    </Box>
    <Box  w={{base:"100%", sm:"100%", md:"60%"}}>
        <br></br>
        <form action='https://getform.io/f/31c00949-3d40-4cf3-a7fa-5196ce0b8891'
        method="POST">
<Input mt="5" name="name" placeholder="Your Full Name" />

<Input mt="10" type="email" name='email' placeholder="Your Email Adress" />

<Textarea name="message" mt="10" size="5xl" placeholder="Enter your Message here" />
<Button type='submit' bg="#000048" mt="8" color="white" formTarget="_blank">Submit</Button>
</form>
    </Box>
    </Box>
<Box fontWeight="bold" mt="5">    Handcrafted With   <FavoriteIcon style={{ color: "red",fontSize:"30px", marginBottom:"-8px" }}/>   By Gangaram
</Box>
    </>
}

export default Contact