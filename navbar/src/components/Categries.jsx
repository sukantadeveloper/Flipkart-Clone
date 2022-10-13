import { Flex,Center,Popover,PopoverBody,PopoverContent,List,ListItem,PopoverTrigger } from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons"
export const Categories=()=>{
    return(

        <>
        <Flex justifyContent='space-around' className="whole">
        <Popover trigger='hover' >
  <PopoverTrigger>
    <Center _hover={{color:"#2874f0" ,cursor:"pointer"}} className='secnav'>Electronics<ChevronDownIcon _hover={{ transform: "rotate(180deg)" }}/></Center>
  </PopoverTrigger>
  <PopoverContent w='1100px' >
  
   
 
    <PopoverBody display='flex' justifyContent="space-between" >
   <List w='90%' pl ='10px'>
  <ListItem>Mobile</ListItem>
  <ListItem>Mi</ListItem>
  <ListItem>Realme</ListItem>
  <ListItem>oppo</ListItem>
  <ListItem>Samsung</ListItem>
  <ListItem>Infinix</ListItem>
  <ListItem>Vivo</ListItem>
  <ListItem>Honor</ListItem>
  <ListItem>Asus</ListItem>
  <ListItem>Iphone SE</ListItem>
  <ListItem>Poco X2</ListItem>
  <ListItem>Motorola</ListItem>
  <ListItem>IQOO3</ListItem>
  <ListItem>Iphone 13</ListItem>

</List>
    <List w='100%' bg='gray.100' pl='15px'>
  <ListItem>Mobile Accesories</ListItem>
  <ListItem>Cover</ListItem>
  <ListItem>Power Bank</ListItem>
  <ListItem>Mobile case</ListItem>
  <ListItem>Headphones</ListItem>
  <ListItem>Screenguards</ListItem>
  <ListItem>Memory Cards</ListItem>
  <ListItem>Mobile Cables</ListItem>
  <ListItem>Mobile Holders</ListItem>
  <ListItem>Smart Wearable Tech</ListItem>
  <ListItem>Smart Watches</ListItem>
  <ListItem>Smart Glasses</ListItem>
</List>
         <List w='100%' pl='15px'>
  <ListItem>Laptop</ListItem>
  <ListItem>Gaming Laptop</ListItem>
  <ListItem>Destop PCs</ListItem>
  <ListItem>Notebook</ListItem>
  <ListItem>Gaming & Accessories</ListItem>
  <ListItem>External Hard Disks</ListItem>
  <ListItem>Pendrives</ListItem>
  <ListItem>Laptop Skins & Decals</ListItem>
  <ListItem>Laptop Bags</ListItem>
  <ListItem>Mouse</ListItem>
  <ListItem>Computer Peripherals</ListItem>
  <ListItem>Printers & Ink Cartridges</ListItem>
</List><List w="100%" pl='15px' >
  <ListItem>Television</ListItem>
  <ListItem>Speaker</ListItem>
  <ListItem> Home Audio System</ListItem>
  <ListItem>Soundbars</ListItem>
  <ListItem>Bluetooth Speakers</ListItem>
  <ListItem>DTH Set Top Box</ListItem>
  <ListItem>Smart Home Automation</ListItem>
  <ListItem>Google Nest</ListItem>
  <ListItem>Camera</ListItem>
  <ListItem>DSLR & Mirrorless</ListItem>
  <ListItem>Compact & Bridge Cameras</ListItem>
  <ListItem>Sports & Action</ListItem>
</List>
    </PopoverBody>
  </PopoverContent>
</Popover>

{/* =========================================tv Appliances==== */}
<Popover trigger='hover' >
  <PopoverTrigger>
    <Center _hover={{color:"#2874f0" ,cursor:"pointer"}} className='secnav'>TVs & Appliances</Center>
  </PopoverTrigger>
  <PopoverContent w='1100px'  >
  
   
 
    <PopoverBody display='flex' justifyContent="space-between">
   <List w='100%' pl='15px'>
  <ListItem>Television</ListItem>
  <ListItem>New Launches</ListItem>
  <ListItem>Smart & Ultra HD</ListItem>
  <ListItem>Top Brands</ListItem>
  <ListItem>Mi</ListItem>
  <ListItem>Vu</ListItem>
  <ListItem>Thomson</ListItem>
  <ListItem>Samsung</ListItem>
  <ListItem>iFFALCON by TCL</ListItem>
  <ListItem>Nokia</ListItem>
  <ListItem>LG</ListItem>
  <ListItem>realme</ListItem>
  <ListItem>Motorola</ListItem>
  <ListItem>Shop by Screen Size</ListItem>

</List>
    <List w='100%' bg='gray.100' pl='15px' >
  <ListItem>Washing Machine </ListItem>
  <ListItem>Fully Automatic Front Load</ListItem>
  <ListItem>Semi Automatic Top Load</ListItem>
  <ListItem>Fully Automatic Top Load</ListItem>
  <ListItem>Air Conditioners</ListItem>
  <ListItem>Inverter AC</ListItem>
  <ListItem>Split Acs</ListItem>
  <ListItem>Window Acs</ListItem>
  <ListItem>Shop By Brand</ListItem>
  <ListItem>LG</ListItem>
  <ListItem>Hitachi</ListItem>
  <ListItem>Carrier</ListItem>
</List>
         <List w='100%' pl='15px'>
  <ListItem>Small Home Appliances</ListItem>
  <ListItem>Irons</ListItem>
  <ListItem>Water Purifiers</ListItem>
  <ListItem>Fans</ListItem>
  <ListItem>Air Coolers</ListItem>
  <ListItem>Inverters</ListItem>
  <ListItem>Vacum Cleaners</ListItem>
  <ListItem>Sewing Machines</ListItem>
  <ListItem>Voltage stabilizers</ListItem>
  <ListItem>Water Geysers</ListItem>
  <ListItem>Immersion Rods</ListItem>
  <ListItem>Top Brands</ListItem>
  <ListItem>Livpure</ListItem>
  <ListItem>Philips</ListItem>
  <ListItem>Bajaj</ListItem>
</List><List w='100%' bg='gray.100' pl='15px'>
  <ListItem>Buying Guides</ListItem>
  <ListItem>Televisions</ListItem>
  <ListItem>Washing Machines</ListItem>
  <ListItem>Refrigerators</ListItem>
  <ListItem>Air Conditioners</ListItem>
  <ListItem>Water Purifiers</ListItem>
  <ListItem>Air Purifiers</ListItem>
  <ListItem>Chimneys</ListItem>
  <ListItem>Water Geysers</ListItem>
  <ListItem>New Launches</ListItem>
  <ListItem>Coocaa Smart TVs</ListItem>
  <ListItem>Nokia (55) 4k Android Tv</ListItem>
</List>
    </PopoverBody>
  </PopoverContent>
</Popover>
{/* ======================men will be men=============== */}
<Popover trigger='hover' >
  <PopoverTrigger>
  <Center _hover={{color:"#2874f0" ,cursor:"pointer"}}>Men</Center>
  </PopoverTrigger>
  <PopoverContent w='1100px'  >
  
   
 
    <PopoverBody display='flex' justifyContent="space-between">
   <List w='100%'>
  <ListItem>Footwear</ListItem>
  <ListItem>Sports Shoes</ListItem>
  <ListItem>Casual Shoes</ListItem>
  <ListItem>Formal </ListItem>
  <ListItem>Sandals & Floaters</ListItem>
  <ListItem>Flip-Flops</ListItem>
  <ListItem>Loafers</ListItem>
  <ListItem>Boots</ListItem>
  <ListItem>Running Shoes</ListItem>
  <ListItem>Sneakers</ListItem>
  <ListItem>Men's Grooming</ListItem>
  <ListItem>Deodrants</ListItem>
  <ListItem>Perfumes</ListItem>
  <ListItem>Beard Care & Grooming</ListItem>

</List>
    <List w='100%' bg='gray.100'>
  <ListItem>Clothing </ListItem>
  <ListItem>Top Wear</ListItem>
  <ListItem>T-Shirts</ListItem>
  <ListItem>Formal Shirts</ListItem>
  <ListItem>Casual Shirts</ListItem>
  <ListItem>Bottom Wear</ListItem>
  <ListItem>Jeans</ListItem>
  <ListItem>Casual Trousers</ListItem>
  <ListItem>Formal Trousers</ListItem>
  <ListItem>Track Pants</ListItem>
  <ListItem>Shorts</ListItem>
  <ListItem>Cargos</ListItem>
</List>
         <List w='100%'>
  <ListItem>Winter Wear</ListItem>
  <ListItem>SweatShirts</ListItem>
  <ListItem>Jackets</ListItem>
  <ListItem>Sweater</ListItem>
  <ListItem>Tracksuits</ListItem>
  <ListItem>Ethnic wear</ListItem>
  <ListItem>Kurta</ListItem>
  <ListItem>Ethnic Sets</ListItem>
  <ListItem>Sherwanis</ListItem>
  <ListItem>Ethnic Pyjama</ListItem>
  <ListItem>Dhoti</ListItem>
  <ListItem>Lungi</ListItem>
  <ListItem>Innerwear & Loungewear</ListItem>
  <ListItem>Briefs & Trunks</ListItem>
  <ListItem>Vests</ListItem>
</List><List w='100%' bg='gray.100' pl='15px'>
  <ListItem>Watches</ListItem>
  <ListItem>Fastrack</ListItem>
  <ListItem>Casio</ListItem>
  <ListItem>Titan</ListItem>
  <ListItem>Fossil</ListItem>
  <ListItem>Sonata</ListItem>
  <ListItem>Accessories</ListItem>
  <ListItem>Backpacks</ListItem>
  <ListItem>Wallets</ListItem>
  <ListItem>Belts</ListItem>
  <ListItem>Sunglasses</ListItem>
  <ListItem>Frames</ListItem>
</List>
    </PopoverBody>
  </PopoverContent>
</Popover>
    {/* ===================================womem=====     */}
<Popover trigger='hover' >
  <PopoverTrigger>
  <Center _hover={{color:"#2874f0" ,cursor:"pointer"}}className='secnav'>Women</Center>
  </PopoverTrigger>
  <PopoverContent w='1100px' >
  
   
 
    <PopoverBody display='flex' justifyContent="space-between">
   <List w='100%' pl='15px'>
  <ListItem>Clothing</ListItem>
  <ListItem>Women Western & Maternity Wear</ListItem>
  <ListItem>Topwear</ListItem>
  <ListItem>Dresses </ListItem>
  <ListItem>Jeans</ListItem>
  <ListItem>Shorts</ListItem>
  <ListItem>Skirts</ListItem>
  <ListItem>Jegging & Tights</ListItem>
  <ListItem>Trousers & Capris</ListItem>
  <ListItem>Lingerie & Sleepwear</ListItem>
  <ListItem>Bras</ListItem>
  <ListItem>Panties</ListItem>
  <ListItem>Lingerie</ListItem>
  <ListItem>Night Dresses & Nighties</ListItem>

</List>
    <List w='100%' bg='gray.100' pl='15px'>
  <ListItem>Ethnic Wear </ListItem>
  <ListItem>Sarees</ListItem>
  <ListItem>Kurtas & Kurtis</ListItem>
  <ListItem>Dress Material</ListItem>
  <ListItem>Lehenga Choli</ListItem>
  <ListItem>Blouse</ListItem>
  <ListItem>Kurta Sets & Salwar Suits</ListItem>
  <ListItem>Gowns</ListItem>
  <ListItem>Dupattas</ListItem>
  <ListItem>Ethnic Bottoms</ListItem>
  <ListItem>Leggings & Churidars</ListItem>
  <ListItem>Palazzos</ListItem>
</List>
         <List w='100%' pl='15px'>
  <ListItem>Winter Wear</ListItem>
  <ListItem>SweatShirts</ListItem>
  <ListItem>Jackets</ListItem>
  <ListItem>Sweater</ListItem>
  <ListItem>Tracksuits</ListItem>
  <ListItem>Ethnic wear</ListItem>
  <ListItem>Kurta</ListItem>
  <ListItem>Ethnic Sets</ListItem>
  <ListItem>Sherwanis</ListItem>
  <ListItem>Ethnic Pyjama</ListItem>
  <ListItem>Dhoti</ListItem>
  <ListItem>Lungi</ListItem>
  <ListItem>Innerwear & Loungewear</ListItem>
  <ListItem>Briefs & Trunks</ListItem>
  <ListItem>Vests</ListItem>
</List><List w='100%' bg='gray.100' pl='15px'>
  <ListItem>Watches</ListItem>
  <ListItem>Fastrack</ListItem>
  <ListItem>Casio</ListItem>
  <ListItem>Titan</ListItem>
  <ListItem>Fossil</ListItem>
  <ListItem>Sonata</ListItem>
  <ListItem>Accessories</ListItem>
  <ListItem>Backpacks</ListItem>
  <ListItem>Wallets</ListItem>
  <ListItem>Belts</ListItem>
  <ListItem>Sunglasses</ListItem>
  <ListItem>Frames</ListItem>
</List>
    </PopoverBody>
  </PopoverContent>
</Popover>
        <Center  _hover={{color:"#2874f0" ,cursor:"pointer"}} className='secnav'>Baby & Kids</Center>
        <Popover trigger='hover' >
  <PopoverTrigger>
    <Center _hover={{color:"#2874f0" ,cursor:"pointer"}} className='secnav'>Home & Furniture</Center>
  </PopoverTrigger>
  <PopoverContent w='1100px'  >
  
   
 
    <PopoverBody display='flex' justifyContent="space-between">
   <List w='100%' pl='15px'>
  <ListItem>Television</ListItem>
  <ListItem>New Launches</ListItem>
  <ListItem>Smart & Ultra HD</ListItem>
  <ListItem>Top Brands</ListItem>
  <ListItem>Mi</ListItem>
  <ListItem>Vu</ListItem>
  <ListItem>Thomson</ListItem>
  <ListItem>Samsung</ListItem>
  <ListItem>iFFALCON by TCL</ListItem>
  <ListItem>Nokia</ListItem>
  <ListItem>LG</ListItem>
  <ListItem>realme</ListItem>
  <ListItem>Motorola</ListItem>
  <ListItem>Shop by Screen Size</ListItem>

</List>
    <List w='100%' bg='gray.100' pl='15px'>
  <ListItem>Washing Machine </ListItem>
  <ListItem>Fully Automatic Front Load</ListItem>
  <ListItem>Semi Automatic Top Load</ListItem>
  <ListItem>Fully Automatic Top Load</ListItem>
  <ListItem>Air Conditioners</ListItem>
  <ListItem>Inverter AC</ListItem>
  <ListItem>Split Acs</ListItem>
  <ListItem>Window Acs</ListItem>
  <ListItem>Shop By Brand</ListItem>
  <ListItem>LG</ListItem>
  <ListItem>Hitachi</ListItem>
  <ListItem>Carrier</ListItem>
</List>
         <List w='100%' pl='15px'>
  <ListItem>Small Home Appliances</ListItem>
  <ListItem>Irons</ListItem>
  <ListItem>Water Purifiers</ListItem>
  <ListItem>Fans</ListItem>
  <ListItem>Air Coolers</ListItem>
  <ListItem>Inverters</ListItem>
  <ListItem>Vacum Cleaners</ListItem>
  <ListItem>Sewing Machines</ListItem>
  <ListItem>Voltage stabilizers</ListItem>
  <ListItem>Water Geysers</ListItem>
  <ListItem>Immersion Rods</ListItem>
  <ListItem>Top Brands</ListItem>
  <ListItem>Livpure</ListItem>
  <ListItem>Philips</ListItem>
  <ListItem>Bajaj</ListItem>
</List><List w='100%' bg='gray.100' pl='15px'>
  <ListItem>Buying Guides</ListItem>
  <ListItem>Televisions</ListItem>
  <ListItem>Washing Machines</ListItem>
  <ListItem>Refrigerators</ListItem>
  <ListItem>Air Conditioners</ListItem>
  <ListItem>Water Purifiers</ListItem>
  <ListItem>Air Purifiers</ListItem>
  <ListItem>Chimneys</ListItem>
  <ListItem>Water Geysers</ListItem>
  <ListItem>New Launches</ListItem>
  <ListItem>Coocaa Smart TVs</ListItem>
  <ListItem>Nokia (55) 4k Android Tv</ListItem>
</List>
    </PopoverBody>
  </PopoverContent>
</Popover>
        <Center _hover={{color:"#2874f0" ,cursor:"pointer"}} className='secnav'>Sports,Books & more</Center>
        <Center _hover={{color:"#2874f0" ,cursor:"pointer"}} className='secnav'>Flight</Center>
        <Center _hover={{color:"#2874f0" ,cursor:"pointer"}} className='secnav'>OfferZone</Center>
        <Center _hover={{color:"#2874f0" ,cursor:"pointer"}} className='secnav'>Grocery</Center>
        </Flex>
        
        </>
    )
}