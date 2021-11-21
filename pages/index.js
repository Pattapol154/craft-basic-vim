import NextLink from 'next/link'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon,MinusIcon} from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
const Home = () => {
	return (
	     <Layout>
		<Container>
			  <Section delay={0.1}>
				 <Heading as="h3" fontSize={20} mt={10} variant="section-title">
          				vi/vim basic
        			 </Heading>
	<Section delay={0.2}>
        <BioSection>
          <BioYear>1</BioYear>
          Command mode จะเป็นโหมดปกติตอนเริ่มต้น vi ในโหมดนี้คุณสามารถจะทำการเคลื่อนย้ายเคอร์เซอร์ ลบข้อความ สำเนาข้อความ และทำงานอื่นๆได้ การทำงานใน mode นี้จะเป็นการเคลื่อนย้ายเคอเซอร์ไปยังตำแหน่งที่ต้องการ
        </BioSection>
        <BioSection>
          <BioYear>2</BioYear>
          Insert mode  ในโหมดนี้เป็นโหมดที่ทำให้คุณสามารถทำการแก้ไขข้อความหรือพิมพ์ข้อความลงไปได้ คุณสามารถเปลี่ยนจาก Command mode เข้ามาอยู่ใน Insert mode ได้โดยการกดปุ่ม " i " และคุณก็จะสามารถพิมพ์ข้อความ	     ต่างๆ ได้ และเมื่อคุณต้องการจะกลับไปยัง Command mode อีกที คุณก็สามารถทำได้โดยการ กดปุ่ม " Esc "
        </BioSection>
        <BioSection>
          <BioYear>3</BioYear>
          Last line mode    จะเป็นโหมดที่อนุญาตให้คุณสามารถ ใช้คำสั่งเพิ่มเติมของ vi ได้ โดยคุณจะต้องกดปุ่ม " : " (โค-ลอน) ซึ่ง vi จะแสดงเป็นพร้อมต์ รอรับคำสั่งอยู่ด้านล่างสุด ของจอภาพ คุณสามารถทำการสั่งโดยการพิมพ์คำว่า " wq " 	     แล้วกด Enter เพื่อทำการบันทึกข้อความลงไฟล์ แล้วออกจากโปรแกรม vi เป็นต้น
        </BioSection>
      </Section>
	<Section delay={0.2}>
		<Heading as="h3" fontSize={20} mt={10} variant="section-title">
          		Movement
        	</Heading>
 <Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>1</BioYear> 
           	h j k I ใช้เลื่อน Cursor ซ้าย ล้าง บน ขวา เหมือนตอนเราใช้ลูกศร ทำให้เราไม่ต้องเอื้อมมือไปกด
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
          		-
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

   <Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>2</BioYear> 
           	w เลื่อน cursor ไปตาม “คำ” (jump by start of Words)
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
          		มีข้อความที่เขียนว่า "Past the square, past the bridge" (ตัว P จาก Past คือตัวที่ cursor ชี้อยู่) เเละผมกดตัว w
			มันก็ย้ายมาอยู่ที่ (t จาก the) และกดต่อไปก็จะย้ายไปที่ ( s จาก square ) แบบนี้
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>3</BioYear> 
           	b เลื่อน cursor ไปตาม “ท้ายคำ” (jump Backward by words )
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
          		ในขณะเดียวกันถ้าผมใช้ปุ่ม e โดยให้ "Past the square, past the bridge" (cursor อยู่ที่ตัว t จาก Past) ถ้าผม
กดต่อไปมันก็จะเลื่อนไปตัวถัดไป (e จาก the) และกดถัดไปก็เลื่อนไปเรื่อยๆ และถ้าอยากกลับมาคำก่อนหน้าก็กด b
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>4</BioYear> 
           	$ เลื่อน cursor ไปท้ายบรรทัด (end of line)
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
          		มีข้อความที่เขียนว่า "Take a little walk to the edge of town" (ตัว T จาก Take คือตัวที่ cursor ชี้อยู่) และผม
กดตัว $ มันก็ย้ายมาอยู่ที่ (t จาก town)
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>5</BioYear> 
           	0 เลื่อน cursor ไปต้นบรรทัด (zero start of line)
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
          		ตอนนี้ (cursor ชี้อยู่ที่ n จาก town) ผมใช้ปุ่มเลข 0  (cursor จะย้ายมาอยู่ที่ t จาก Take)
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>6</BioYear> 
           	nG ไปยังบรรทัดที่ n หากไม่ใส่ n จะไปบรรทัดสุดท้าย
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
          		มีข้อความอยู่ 5 บรรทัด 
บรรทัดที่ 1 "Past the square, past the bridge"
บรรทัดที่ 2 "Like a bird of doom"
บรรทัดที่ 3 "Take a little walk to the edge of town"
บรรทัดที่ 4 "where secrets lie in the border fires"
บรรทัดที่ 5 "You're never coming back"
(cursor ชี้อยู่ที่บรรทัดที่ 1) ผมใช้ปุ่ม 2G (ตอนนี้ cursor จะย้ายมาอยู่ที่ บรรทัดที่ 2) ถ้าผมไม่ใส่ตัวเลข nG (ตอนนี้ cursor จะย้ายไปยังบรรทัดสุดท้าย)
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>7</BioYear> 
           	^ เลื่อน cursor ไป “ต้นคำ” ของบรรทัด (first character of line)
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
คำสั่งนี้จะเหมือนกับ 0 มีข้อความที่เขียนว่า "Take a little walk to the edge of town" (ตอนนี้ cursor ชี้อยู่ n จาก
town) ผมใช้ปุ่ม ^ (ตอนนี้ cursor จะย้ายไปยัง T จาก Take)
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>8</BioYear> 
           	^ เลื่อน cursor ไป “ต้นคำ” ของบรรทัด (first character of line)
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
คำสั่งนี้จะเหมือนกับ 0 มีข้อความที่เขียนว่า "Take a little walk to the edge of town" (ตอนนี้ cursor ชี้อยู่ n จาก
town) ผมใช้ปุ่ม ^ (ตอนนี้ cursor จะย้ายไปยัง T จาก Take)
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>9</BioYear> 
           	gg เลื่อน cursor ไปบรรทัดแรกสุดของไฟล์
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
มีข้อความอยู่ 10 บรรทัด
<BioSection>
<BioYear>บรรทัดที่ 1 </BioYear> 
"He's a ghost, he's a guru"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 2 </BioYear> 
"They're whispering his name"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 3 </BioYear> 
"You don't have no money?"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 4</BioYear> 
"You don't have no car?"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 5 </BioYear> 
"On the TV screen" 
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 6</BioYear> 
"Past the square, past the bridge"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 7 </BioYear> 
"Like a bird of doom"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 8 </BioYear> 
"Take a little walk to the edge of town"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 9 </BioYear> 
"where secrets lie in the border fires"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 10 </BioYear> "You're never coming back"
</BioSection>
(cursor ชี้อยู่บรรทัดที่ 10) ผมใช้ปุ่ม gg (ตอนนี้ cursor จะย้ายไปบรรทัดที่ 1)
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>10</BioYear> 
           	G เลื่อน cursor ไปบรรทัดท้ายสุดของไฟล์
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
ตอนนี้ (cursor ชี้อยู่บรรทัดที่ 1) ผมใช้ปุ่ม G (ตอนนี้ cursor จะย้ายไปบรรทัดที่ 10)
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>
</Section>

<Section delay={0.2}>
<Heading as="h3" fontSize={20} mt={10} variant="section-title">
          		Editing
        	</Heading>
<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>0</BioYear> 
           	Example
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
<BioSection>
<BioYear>บรรทัดที่ 1 </BioYear> 
"He's a ghost, he's a guru"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 2 </BioYear> 
"They're whispering his name"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 3 </BioYear> 
"You don't have no money?"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 4</BioYear> 
"You don't have no car?"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 5 </BioYear> 
"On the TV screen" 
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 6</BioYear> 
"Past the square, past the bridge"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 7 </BioYear> 
"Like a bird of doom"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 8 </BioYear> 
"Take a little walk to the edge of town"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 9 </BioYear> 
"where secrets lie in the border fires"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 10 </BioYear> "You're never coming back"
</BioSection>
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>
<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>1</BioYear> 
           	r(ตัวอักษร)ทับ 1 ตัวอักษรที่เราต้องการ (replace)
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
มีข้อความที่เขียนว่า "On the TV screen" (ตอนนี้ cursor ชี้อยู่ O จาก On)
ผมใช้ปุ่ม r ตามด้วยอักษร i จะได้คำใหม่ว่า  "in"
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>2</BioYear> 
           	u   Undo การกระทำครั้งล่าสุด [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
มีข้อความที่เขียนว่า "On a glory night" (ตอนนี้ ผมใช้ปุ่ม i-insert เพิ่มข้อความ more ระหว่าง On -- a
เเละเพิ่มข้อความ hope ระหว่าง glory -- night) ผมใช้ปุ่ม u คำ hope จะหายไป กดถัดไป more ที่เพิ่มเข้ามา จะหายไป
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>3</BioYear> 
           	U   Undo การกระทำทั้งบรรทัดปัจจุบัน
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
ผมใช้ปุ่ม U(ตัวพิพม์ใหญ่) more กับ hope ที่เพิ่มเข้ามาใหม่ จะหายไปในการกดครั้งเดียว
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>4</BioYear> 
           	x   ลบตรง cursor [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
มีคำที่เขียนว่า "ring" (ตอนนี้ cursor ชี้อยู่ r จาก ring) ผมใช้ปุ่ม x ตัวอักษร r หายไป
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>5</BioYear> 
           	dw  ลบคำ
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
ทีข้อความที่เขียนว่า "Like a bird of doom" (ตอนนี้ cursor ชี้อยู่ L จาก Like) ผมใช้ปุ่ม dw ทำให้ Like หายไป พอกดอีก
ทำให้  a หายไป
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>6</BioYear> 
           	dd  ลบบรรทัด [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 1 He's a ghost, he's a guru (ตอนนี้ cursor ชี้อยู่บรรทัดที่ 1) ผมใช้ปุ่มปุ่ม dd ทำให้ข้อความบรรทัดที่ 1 หายไปทั้งบรรทัด
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>7</BioYear> 
           	d$  ลบจาก cursor จนท้ายบรรทัด
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 4 You don't have no car? (ตอนนี้ cursor ชี้อยู่ d จาก  don't) ผมใช้ปุ่ม d$ ทำให้ข้อความตั้งเเต่จุดที่ชี้ cursor จนถึงท้ายบรรทัดหายไป 
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>8</BioYear> 
           	d0  ลบจาก cursor จนต้นบรรทัด
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 6  Past the square, past the bridge (ตอนนี้ cursor ชี้อยู่ e จาก square) ผมใช้ปุ่ม d0 ทำให้ข้อความก่อนหน้า e หายไป เเต่ยังคงตัว e ไว้
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>9</BioYear> 
           	dG  ลบจาก cursor จนท้ายไฟล์
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 1 They're whispering his name (ตอนนี้ cursor บรรทัดที่ 2) ผมใช้ปุ่ม dG ทำให้บรรทัดที่มี cursor จนถึงบรรทัดท้ายไฟล์หายไป
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>10</BioYear> 
           	a   เพิ่มข้อมูลต่อจาก cursor [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 3  You don't have no money? (ตอนนี้ cursor ชี้อยู่ t จาก don't) ผมใช้ปุ่ม a เเทรกข้อความ green and apple   
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>11</BioYear> 
           	A   เพิ่มข้อมูลต่อจากท้ายบรรทัด 
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 3  You don't have no money? (ตอนนี้ cursor ชี้อยู่ n จาก no) ผมใช้ปุ่ม A เพิ่มข้อความท้ายบรรทัดที่มีเครื่องหมาย "?" fire and dance
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>12</BioYear> 
           	i   แทรกข้อมูลหน้า cursor [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 9  Where secrets lie in the border fires (ตอนนี้ cursor ชี้อยู่ s จาก secrets) ผมใช้ปุ่ม i เเทรกข้อความว่า morning star 
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>13</BioYear> 
           	I   เเทรกข้อมูลที่ต้นบรรทัด 
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
 บรรทัดที่ 9  Where secrets lie in the border fires (ตอนนี้ cursor ชี้อยู่ s จาก secrets) ผมใช้ปุ่ม I เพิ่มข้อความว่า  I'm standing here
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>
	
<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>14</BioYear> 
           	o   แทรกบรรทัดด้านล่าง cursor [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 10  You're never coming back (ตอนนี้ cursor ชี้อยู่บรรทัดที่ 10) ผมใช้ปุ่ม o เพิ่มข้อความ Walking down the street เป็นบรรทัดที่ 11 
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>	

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>15</BioYear> 
           	O   แทรกบรรทัดด้านบน cursor 
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 11 You're never cominh back (ตอนนี้ cursor ชี้อยู่บรรทัดที่ 10) ผมใช้ปุ่ม O เพิ่มข้อความ Take me to the magic of the moment เป็นบรรทัดที่  10
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>	
</Section>
<Section delay={0.2}>
<Heading as="h3" fontSize={20} mt={10} variant="section-title">
          		Marking text(visual mode)
        	</Heading>
		<BioSection>
          		<BioYear>1</BioYear>
          		v เริ่ม visual mode
        	</BioSection>
		<BioSection>
          		<BioYear>2</BioYear>
          		V เริ่ม visual mode พร้อมคลุมทั้งบรรทัด
        	</BioSection>
		<BioSection>
          		<BioYear>3</BioYear>
          		Ctrl+v เริ่ม visual mode พร้อมคลุมเป็น block [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>4</BioYear>
          		Esc exit visual mode
        	</BioSection>
		<BioSection>
          		<BioYear>5</BioYear>
          		v[ลากคลุม]y — yank (copy) สิ่งที่ลากคลุม
        	</BioSection>
		<BioSection>
          		<BioYear>6</BioYear>
          		v[ลากคลุม]d — delete สิ่งที่ลากคลุม
        	</BioSection>
		<BioSection>
          		<BioYear>7</BioYear>
          		v[ลากคลุม]c — change สิ่งที่ลากคลุม
        	</BioSection>
</Section>
<Section delay={0.2}>
<Heading as="h3" fontSize={20} mt={10} variant="section-title">
          		Cut and Paste
        	</Heading>
<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>0</BioYear> 
           	Example
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
<BioSection>
<BioYear>บรรทัดที่ 1</BioYear>
 They're gonna rip it off
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 2 </BioYear> 
Say, "Find a home"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 3 </BioYear> 
I'm gonna work the straw
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 4</BioYear> 
 Don't wanna hear about it
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 5 </BioYear> 
Tell me "Go back home"
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 6 </BioYear>
And the feeling coming from my bones
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 7 </BioYear>
Everyone knows about it
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 8 </BioYear>
Because i can't forget
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 9 </BioYear>
In a dusty black coat with
</BioSection>
<BioSection>
<BioYear>บรรทัดที่ 10</BioYear>
 Hey man, you know
</BioSection>
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>	

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>1</BioYear> 
           	yy — yank (copy) บรรทัด [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
cursor ชี้อยู่บรรทัดที่ 1 มีข้อความว่า  "They're gonna rip it off" ผมใช้ปุ่ม yy ตามด้วย p บรรทัดที่เรา copy จะกลายเป็นบรรทัดที่ 2
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>	

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>2</BioYear> 
           	y$ — yank ถึงตัวอักษรตัดสุดท้าย
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 2 Say, "Find a home" (ตอนนี้ cursor ชี้อยู่ F จาก Find) ผมใช้ปุ่ม y$ ตามด้วย p ข้อความที่ copy จะมีเเค่ Find a home"
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>	

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>3</BioYear> 
           	p — put (paste) สิ่งที่เรา yank “หลัง” cursor [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
cursor ชี้อยู่บรรทัด 7 "Everyone knows about it" ผมใช้ปุ่ม yy ตามด้วย p ข้อความที่ copy จะนำไปวางเป็นบรรทัดที่ 11
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>	

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>4</BioYear> 
           	P = Put (paste) สิ่งที่เรา yank “ก่อน” cursor [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
cursor ชี้อยู่บรรทัด 7 "Everyone knows about it" ผมใช้ปุ่ม yy ตามด้วย P ข้อความที่ copy จะนำไปเเทนที่บรรทัดที่ 10
บรรทัดเดิมจะขยับมาเป็นบรรทัดที่ 11
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>	

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>5</BioYear> 
           	dd — delete (cut) ทั้งบรรทัด [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
cursor ชี้อยู่บรรทัด 6 "Tell me "Go back home" " เป็นบรรทัดที่ copy มาจากบรรทัดที่ 5 ผมใช้ปุ่ม dd ข้อความบรรทัดที่ 6 หายไป ถูกเเทนที่้ข้อความจากบรรทัดที่ 7 
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>	

<Accordion allowMultiple>
	<AccordionItem>
    {({ isExpanded }) => (
      <>
          <AccordionButton>
           <Box flex="1" textAlign="left">
           	<BioYear>6</BioYear> 
           	x — delete (cut) หนึ่งตัวอักษร [ใช้บ่อย]
           </Box>
            {isExpanded ? (
              <MinusIcon fontSize="12px" />
            ) : (
              <AddIcon fontSize="12px" />
            )}
          </AccordionButton>
        	<AccordionPanel pb={4}>
บรรทัดที่ 6 And the feeling coming from my bones (ตอนนี้ cursor ชี้อยู่ s จาก bones) ผมใช้ปุ่ม x จะเห็นว่า s 
หายไป เเละถ้ากดต่อไป ตัวอักษรก็จะหายไปเรื่อยๆ
        	</AccordionPanel>
      	</>
   	 )}
  	</AccordionItem>
</Accordion>	
</Section>
<Section delay={0.2}>
<Heading as="h3" fontSize={20} mt={10} variant="section-title">
          		Scroll
        	</Heading>
		<BioSection>
          		<BioYear>1</BioYear>
          		Ctrl + y เลื่อนหน้าต่างขึ้น 1 บรรทัด
        	</BioSection>
		<BioSection>
          		<BioYear>2</BioYear>
          		Ctrl+ e เลื่อนหน้าต่างลง 1 บรรทัด
        	</BioSection>
		<BioSection>
          		<BioYear>3</BioYear>
          		Ctrl + u เลื่อนหน้าต่างขึ้น ครึ่งหน้า (up)
        	</BioSection>
		<BioSection>
          		<BioYear>4</BioYear>
          		Ctrl + d เลื่อนหน้าต่างลง ครึ่งหน้า (down)
        	</BioSection>
		<BioSection>
          		<BioYear>5</BioYear>
          		Ctrl + f เลื่อนหน้าต่างขึ้นทั้งหน้า (forward)
        	</BioSection>
		<BioSection>
          		<BioYear>6</BioYear>
          		Ctrl + b เลื่อนหน้าต่างขึ้นทั้งครึ่งหน้า (backward)
        	</BioSection>
</Section>
<Section delay={0.2}>
<Heading as="h3" fontSize={20} mt={10} variant="section-title">
          		File
        	</Heading>
		<BioSection>
          		<BioYear>1</BioYear>
          		:w — write (save) ไฟล์ [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>2</BioYear>
          		:/string ค้นหาข้อความที่ต้องการ
        	</BioSection>
		<BioSection>
          		<BioYear>3</BioYear>
          		:help ดูคำสั่งต่างๆ
        	</BioSection>
		<BioSection>
          		<BioYear>4</BioYear>
          		:set nu แสดงหมายเลขบรรทัด
        	</BioSection>
		<BioSection>
          		<BioYear>5</BioYear>
          		:%s/old/new/g หาคำ old เเทนที่ด้วยคำว่า new ทั้งหมดที่เจอ
        	</BioSection>
		<BioSection>
          		<BioYear>6</BioYear>
          		:wq — write (save) ไฟล์พร้อม quit
        	</BioSection>
		<BioSection>
          		<BioYear>7</BioYear>
          		:q — quit ถ้ามีการแก้ไฟล์จะไม่สามารถ quit ได้ [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>8</BioYear>
          		:q! — quit โดยไม่มีการ save ใดๆ
        	</BioSection>
		<BioSection>
          		<BioYear>9</BioYear>
          		คำที่ต้องการหา — ค้นหาคำในไฟล์ (กด n เพื่อค้นหาซ้ำ กด N เพื่อค้นหาย้อนกลับ) [ใช้บ่อย]
        	</BioSection>
</Section>
<Section delay={0.2}>
  <Heading as="h3" variant="section-title">
   ******
  </Heading>
<Paragraph>
บาง key เราสามารถใส่ number prefix เข้าไปได้นะ อย่างเช่น 2yy = copy 2 บรรทัด, 5w ให้เลื่อนไป 5 คำ, 21g เลื่อนไปบรรทัดที่ 21
</Paragraph>
</Section>
			  </Section>
		</Container>
            </Layout>
	)
}

export default Home
