import NextLink from 'next/link'
import {
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
		<BioSection>
          		<BioYear>1</BioYear>
          		h j k I ใช้เลื่อน Cursor ซ้าย ล้าง บน ขวา เหมือนตอนเราใช้ลูกศร ทำให้เราไม่ต้องเอื้อมมือไปกด
        	</BioSection>
		<BioSection>
          		<BioYear>2</BioYear>
          		w เลื่อน cursor ไปตาม “คำ” (jump by start of Words)
        	</BioSection>
		<BioSection>
          		<BioYear>3</BioYear>
          		W เลื่อน cursor ไปตาม “คำ” โดยดูจาก white space (jump by Words)
        	</BioSection>
		<BioSection>
          		<BioYear>4</BioYear>
          		b เลื่อน cursor ไปตาม “ท้ายคำ” (jump Backward by words )
        	</BioSection>
		<BioSection>
          		<BioYear>5</BioYear>
          		B เลื่อน cursor ไปตาม “ท้ายคำ” โดยดูจาก white (space jump Backward by words)
        	</BioSection>
		<BioSection>
          		<BioYear>6</BioYear>
          		0 เลื่อน cursor ไปต้นบรรทัด (zero start of line)
        	</BioSection>
		<BioSection>
          		<BioYear>7</BioYear>
          		^ เลื่อน cursor ไป “ต้นคำ” ของบรรทัด (first character of line)
        	</BioSection>
		<BioSection>
          		<BioYear>8</BioYear>
          		$ เลื่อน cursor ไปท้ายบรรทัด (end of line)
        	</BioSection>
		<BioSection>
          		<BioYear>9</BioYear>
          		% เลื่อนcursor เพื่อหาขอบเขตของ block [ ] { }
        	</BioSection>
		<BioSection>
          		<BioYear>10</BioYear>
          		gg เลื่อน cursor ไปบรรทัดแรกสุดของไฟล์
        	</BioSection>
		<BioSection>
          		<BioYear>11</BioYear>
          		G เลื่อน cursor ไปบรรทัดท้ายสุดของไฟล์
        	</BioSection>
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
          		Editing
        	</Heading>
		<BioSection>
          		<BioYear>1</BioYear>
          		r(ตัวอักษร)ทับ 1 ตัวอักษรที่เราต้องการ (replace)
        	</BioSection>
		<BioSection>
          		<BioYear>2</BioYear>
          		J เอาข้อความทั้งหมดของบรรทัดล่างขึ้นมาต่อ (join line) [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>3</BioYear>
          		cc เปลี่ยข้อความทั้งบรรทัด (change (replace) an entire line)
        	</BioSection>
		<BioSection>
          		<BioYear>4</BioYear>
          		s = substitute 1 ตัวอักษร
        	</BioSection>
		<BioSection>
          		<BioYear>5</BioYear>
          		S เหมือน cc
        	</BioSection>
		<BioSection>
          		<BioYear>6</BioYear>
          		ctrl-r — redo [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>7</BioYear>
          		u — undo [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>8</BioYear>
          		~ เปลี่ยนตัวอักษรจาก upper เป็น lower หรือ lower เป็น upper case [ใช้บ่อย]
        	</BioSection>
</Section>
<Section delay={0.2}>
<Heading as="h3" fontSize={20} mt={10} variant="section-title">
          		Cut and Paste
        	</Heading>
		<BioSection>
          		<BioYear>1</BioYear>
          		yy — yank (copy) บรรทัด [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>2</BioYear>
          		y$ — yank ถึงตัวอักษรตัดสุดท้าย
        	</BioSection>
		<BioSection>
          		<BioYear>3</BioYear>
          		p — put (paste) สิ่งที่เรา yank “หลัง” cursor [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>4</BioYear>
          		P = Put (paste) สิ่งที่เรา yank “ก่อน” cursor [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>5</BioYear>
          		Ctrl-r +” put สิ่งที่เรา yank ใน insert mode
        	</BioSection>
		<BioSection>
          		<BioYear>6</BioYear>
          		dd — delete (cut) ทั้งบรรทัด [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>7</BioYear>
          		x — delete (cut) หนึ่งตัวอักษร [ใช้บ่อย]
        	</BioSection>
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
          		:wq — write (save) ไฟล์พร้อม quit
        	</BioSection>
		<BioSection>
          		<BioYear>3</BioYear>
          		:q — quit ถ้ามีการแก้ไฟล์จะไม่สามารถ quit ได้ [ใช้บ่อย]
        	</BioSection>
		<BioSection>
          		<BioYear>4</BioYear>
          		:q! — quit โดยไม่มีการ save ใดๆ
        	</BioSection>
		<BioSection>
          		<BioYear>5</BioYear>
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
