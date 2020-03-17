import React from 'react';
import { Container, Row } from 'react-bootstrap';


// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Business() {
	return(
		<body>
			<Header />
				<Container>
					<Row>
						<p>
							Lorem Ipsum - это текст-«рыба», часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной «рыбой» для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
							<br /><br />


							<b className="text-uppercase">Почему он используется?</b>
							<br /><br />


							Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации «Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..» Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам «lorem ipsum» сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
							<br /><br />


							<b className="text-uppercase">Откуда он появился?</b>
							<br /><br />

							Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, «consectetur», и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги «de Finibus Bonorum et Malorum» («О пределах добра и зла»), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, «Lorem ipsum dolor sit amet..», происходит от одной из строк в разделе 1.10.32
						</p>
					</Row>
				</Container>
			<Footer />
		</body>
	);
}

export default Business;
