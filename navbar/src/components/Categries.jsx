import { Flex,Center,Popover,PopoverBody,PopoverContent,List,ListItem,PopoverTrigger } from "@chakra-ui/react"

export const Categories=()=>{
    return(

        <>
        <Flex justifyContent='space-around'>
        <Popover trigger='hover' >
  <PopoverTrigger>
    <Center>Electronics</Center>
  </PopoverTrigger>
  <PopoverContent w='200%' >
  
   
 
    <PopoverBody display='flex' justifyContent="space-between">
   <List w='100%'>
  <ListItem>Mobile</ListItem>
  <ListItem>Mi</ListItem>
  <ListItem>Realme</ListItem>
  <ListItem>oppo</ListItem>
  <ListItem>Realme</ListItem>
  <ListItem>oppo</ListItem>
  <ListItem>Realme</ListItem>
  <ListItem>oppo</ListItem>
  <ListItem>Realme</ListItem>
  <ListItem>oppo</ListItem>
</List>
    <List w='100%' bg='gray.100'>
  <ListItem>Mobile Accesories</ListItem>
  <ListItem>Cover</ListItem>
  <ListItem>Power Bank</ListItem>
  <ListItem>Mobile case</ListItem>
</List>
         <List w='100%'>
  <ListItem>Laptop</ListItem>
  <ListItem>Gaming Laptop</ListItem>
  <ListItem>Destop</ListItem>
  <ListItem>Notebook</ListItem>
</List><List w='100%'>
  <ListItem>Television</ListItem>
  <ListItem>speaker</ListItem>
  <ListItem>Audio System</ListItem>
  <ListItem>sound</ListItem>
</List>
    </PopoverBody>
  </PopoverContent>
</Popover>
        <Center>TVs &Appliances</Center>
        <Center>Men</Center>
        <Center>Women</Center>
        <Center>Baby & Kids</Center>
        <Center>Home & Furniture</Center>
        <Center>Sports,Books & more</Center>
        <Center>Flight</Center>
        <Center>OfferZone</Center>
        <Center>Grocery</Center>
        </Flex>
        
        </>
    )
}