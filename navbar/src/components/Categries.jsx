import { Flex,Center,Popover,PopoverBody,PopoverContent,List,ListItem,PopoverTrigger } from "@chakra-ui/react"
import {ChevronDownIcon} from "@chakra-ui/icons";
import { useMediaQuery } from '@chakra-ui/react';
import {useEffect,useState} from "react";
import React from "react";

export const Categories=()=>{
  
   const [arr, setarr]=React.useState([]);
   const [arra,setarra] =useState([]);
   const [arrb,setarrb] =useState([]);
   const [arrc,setarrc]=useState([]);
   const [arrd ,setarrd]=useState([]);
   const [arre,setarre]=useState([]);
   const [arrf,setarrf] =useState([]);
   const [arrg,setarrg]=useState([]);
   const [arrh,setarrh]=useState([]);
   const [arri,setarri]=useState([]);
   const [arrj,setarrj]=useState([]);
   const [arrk,setarrk]=useState([]);
   const [arrl,setarrl]=useState([]);
   const [arrm,setarrm]=useState([]);
   
   
  const [isLargerThan670] = useMediaQuery('(min-width: 1000px)');

  useEffect(()=>{
    setarr(arr1);
    setarra(arr2);
    setarrb(arr3);
    setarrc(arr4);
    setarrd(arr5);
    setarre(arr6);
    setarrf(arr7);
    setarrg(arr8);
    setarrh(arr9);
    setarri(arr10);
    setarrj(arr11);
    setarrk(arr12);
    setarrl(arr13);
    setarrm(arr14);
  },[])

  if(isLargerThan670){
    return(

        <>
        <Flex justifyContent='space-around' className="whole" >
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
  <PopoverContent w='1200px'  >
  
   
 
    <PopoverBody display='flex' justifyContent="space-between">
   <List w='100%' pl='15px'>
  {/* <ListItem>Television</ListItem> */}
  {/* <ListItem>New Launches</ListItem>
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
  <ListItem>Shop by Screen Size</ListItem> */}
  {arra.map((el)=>(
    <ListItem fontSize='14px' pb='10px' cursor='pointer'>{el}</ListItem>
  ))}

</List>
    <List w='100%' bg='gray.100' pl='15px' >
  {/* <ListItem>Washing Machine </ListItem>
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
  <ListItem>Carrier</ListItem> */}
  {arrb.map(el=>(
    <ListItem fontSize='14px' pb='10px' cursor='pointer'>{el}</ListItem>
  ))}
</List>
         <List w='100%' pl='15px'>
  {/* <ListItem>Small Home Appliances</ListItem>
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
  <ListItem>Bajaj</ListItem> */}
  {arrc.map(el=>(
    <ListItem fontSize='14px' pb='10px' cursor='pointer'>{el}</ListItem>
  ))}
</List><List w='100%'  pl='15px'>
  
  {arrd.map(el=>(
    <ListItem fontSize='14px' pb='10px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}
</List>

<List w="100%" pl='15px'>
{arre.map(el=>(
    <ListItem fontSize='14px' pb='10px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}
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
   <List w='100%' >
 
   {arrf.map(el=>(
    <ListItem fontSize='14px' pb='10px' pl='15px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}


</List>
    <List w='100%' bg='gray.100' pl='15px'>
 
    {arrg.map(el=>(
    <ListItem fontSize='14px' pb='10px' pl='15px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}
</List>
         <List w='100%'>
         {arrh.map(el=>(
    <ListItem fontSize='14px' pb='10px' pl='15px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}
</List><List w='100%' bg='#f9f9f' >
{arri.map(el=>(
    <ListItem fontSize='14px' pb='10px' pl='15px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}
  
</List>
<List w='100%' bg='#f9f9f' >
{arrj.map(el=>(
    <ListItem fontSize='14px' pb='10px' pl='15px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}
  
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
   <List w='100%' >
   {arrk.map(el=>(
    <ListItem fontSize='14px' pb='10px' pl='15px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}

</List>
    <List w='100%' bg='gray.100' pl='15px'>
    {arrl.map(el=>(
    <ListItem fontSize='14px' pb='10px' pl='15px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}
</List>
   <List w='100%' >
   {arrm.map(el=>(
    <ListItem fontSize='14px' pb='10px' pl='15px' bg="f9f9f9" cursor='pointer'>{el}</ListItem>
  ))}
  
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
}


var arr1=['Xiaomi',  'Samsung','Vivo','Oppo','Apple','Realme','OnePlus','Poco','Nokia'
]


var arr2=[
  'Television',          'New Launches',
  'Smart & Ultra HD',    'Top Brands',
  'Mi',                  'vu',
  'Thomson',             'Samsung',
  'iFFALCON by TCL',     'Nokia',
  'realme',              'Motorola',
  'Shop by Screen Size', '24 & below',
  '28-32',               '39 - 43',
  '48 - 55',             '60 & above'
]


var arr3=[
  'Washing Machine',
  'Fully Automatic Front Load',
  'Semi Automatic Top Load',
  'Fully Automatic Top Load',
  'Air Conditioners',
  'Inverter AC',
  'split ACs',
  'Window ACS',
  'Shop By Brand',
  'Hitachi',
  'Carrier',
  'Refrigerators',
  'Single Door',
  'Double Door',
  'Triple door',
  'Side by Side',
  'Convertible'
]

var arr4=[
  'Kitchen Appliances',
  'Microwave Ovens',
  'Oven Toaster Grills (OTG)',
  'Juicer/Mixer/Grinder',
  'Electric Kettle',
  'Induction Cooktops',
  'Chimneys',
  'Hand Blenders',
  'Sandwich Makers',
  'Pop Up Toasters',
  'Electric Cookers',
  'Wet Grinders',
  'Food Processors',
  'Coffee Makers',
  'Dishwashers',
  'Healthy Living Appliances'
]

var arr5=[
  'Small Home Appliances', 'Irons',
  'Water Purifiers',       'Fans',
  'Air Coolers',           'Inverters',
  'Vacuum Cleaners',       'Sewing Machines',
  'Voltage Stabilizers',   'Water Geysers',
  'Immersion Rods',        'Top Brands',
  'Livpure',               'Philips',
  'Bajaj',                 'IFB',
  'Eureka Forbes',         'Kaff'
]

var arr6= [
  'Buying Guides',
  'Televisions',
  'Washing Machines',
  'Refrigerators',
  'Air Conditioners',
  'Water Purifiers',
  'Air Purifiers',
  'Chimneys',
  'Water Geysers',
  'New Launches',
  'Coocaa Smart TVs',
  'Nokia (55) 4K Android TV',
  'Mi (32) 4A Pro Android TV',
  'MarQ (43) FHD smart TV',
  'LG Refrigerators',
  'Thomson (40) 4K Smart TV',
  'Whirlpool Refrigerators',
  'Kodak (22) | (32) LED TVs'
]

var arr7= [
  'Footwear',
  'Sports Shoes',
  'Casual Shoes',
  'Formal Shoes',
  'Sandals & Floaters',
  'Flip- Flops',
  'Loafers',
  'Boots',
  'Running Shoes',
  'Sneakers',
  "Men's Grooming",
  'Deodorants',
  'Perfumes',
  'Beard Care & Grooming',
  'Shaving & Aftershave',
  'Sexual Wellness'
]

var arr8=[
  'Clothing',              'Top wear',
  'T-Shirts',              'Formal Shirts',
  'Casual Shirts',         'Bottom wear',
  'Jeans',                 'Casual Trousers',
  'Formal Trousers',       'Track pants',
  'Shorts',                'Cargos',
  'Three Fourths',         'Suits',
  ' Blazers & Waistcoats', 'Ties',
  ' Socks',                ' Caps & More',
  'Fabrics'
]

var arr9=[
  'Winter Wear',
  'Sweatshirts',
  'Jackets',
  'Sweater',
  'Tracksuits',
  'Ethnic wear',
  'Kurta',
  'Ethnic Sets',
  'Sherwanis',
  'Ethnic Pyjama',
  'Dhoti',
  'Lungi',
  'Innerwear & Loungewear',
  'Briefs & Trunks',
  'Vests',
  'Boxers',
  'Pyjamas and Lounge Pants',
  'Thermals',
  'Night Suits',
  'Raincoats & Windcheaters'
]

var arr10=[
  'Watches',
  'Fastrack',
  'Casio',
  'Titan',
  'Fossil',
  'Sonata',
  'Accessories',
  'Backpacks',
  'Wallets',
  'Belts',
  'Sunglasses',
  'Luggage & Travel',
  'Frames',
  'Jewellery',
  'Sports & Fitness Store'
]

 var arr11=[
  'Smart Watches',
  'Smart Bands',
  'Personal Care Appliances',
  'Trimmers',
  'Shavers',
  'Grooming Kits',
  'Featured',
  'Watches Store',
  'Footwear Club',
  'Bags & Wallet',
  'T-Shirt Store',
  'Adidas',
  'Beardo',
  'Reebok',
  'Skechers',
  'Nike'
]

var arr12=[
  'Clothing',
  'Women Western & Maternity Wear',
  'Topwear',
  'Dresses',
  'Jeans',
  'Shorts',
  'Skirts',
  'Jeggings & Tights',
  'Trousers & Capris',
  'Lingerie & Sleepwear',
  'Bras',
  'Panties',
  'Lingerie Sets',
  'Night Dresses & Nighties',
  'Shapewear',
  'Camisoles & Slips',
  'Swim & Beachwear',
  'Party Dresses',
  'Sports Wear',
  'Winter Wear'
]
var arr13=[
  'Clothing',              'Top wear',
  'T-shirts',              'Formal Shirts',
  'Casual Shirts',         'Bottom wear',
  'Jeans',                 'Casual Trousers',
  'Formal Trousers',       'Track pants',
  'Shorts',                'Cargos',
  'Three Fourths',         'Suits',
  ' Blazers & Waistcoats', 'Ties',
  ' Socks',                ' Caps & More',
  'Fabrics'
]

var arr14=[
  'Footwear',
  'Sandals',
  'Flats',
  'Heels',
  'Wedges',
  'Shoes',
  'Sports Shoes',
  'Casual Shoes',
  'Boots',
  'Ballerinas',
  "Slippers & Flip- Flop's",
  'Watches',
  'Smart Watches',
  'Personal Care Appliances',
  'Hair Straightners',
  'Hair Dryers',
  'Epilators'
]