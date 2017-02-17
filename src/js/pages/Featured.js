import React from "react";

import Article from "../components/Article";
import filea from "./filea.jpg"
import fileb from "./fileb.jpg"
import filec from "./filec.jpg"
import filed from "./filed.jpg"
import filee from "./filee.jpg"

export default class Featured extends React.Component {
  render() {
    console.log("featured");
    return (
      <div>
        <Article key={1} title='Обща информация' photo={filea} description="Велѝко Тъ̀рново е град, намиращ се в Северна България, център на едноименната област, както и на Северен централен регион. Градът е столица на Втората българска държава и на Княжество България в периода 1878 – 1879 г. През Средновековието носи името Търновград, като постепенно става известен с наименованието Търново. През 1965 г. пред него е добавено „Велико“ в чест на предишната слава на града. Благодарение на богатото си културно-историческо наследство Велико Търново е важен туристически център.
Според данни от 15.12.2015 г. градът е на 16-о място по население със своите 73 508 жители по настоящ адрес[1] и един от четирите града в България с положителен естествен прираст от 2006 до 2014 г. Разположен между Дунавската равнина и Стара планина, върху първите възвишения на Предбалкана, Търново е основен административен, индустриален и образователен център на региона. Тук се намират Националният военен университет „Васил Левски“ – Факултет „Общовойскови“, ВТУ „Св. св. Кирил и Методий“ (вторият по големина университет в България), катедралата Рождество Богородично, крепостите Царевец и Трапезица, множество музеи и културни забележителности; общо 1613 обекта от историческото наследство на България." />
        <Article key={2} title='История на името' photo={fileb} description="Най-разпространената теория за произход на първоначалното име Търновград е славянската – от старобългарското тръневъ, тръновъ, тоест „трънлив, трънен“, и градъ – „оградено място, крепост, твърдина“, откъдето след това се развиват по-късните форми на името на града."/>
        <Article key={3} title='Столица' photo={filec} description="През 1185 г. братята Асен и Петър обявяват в църквата „Св. Димитър“ края на византийското господство, което продължило 167 години и провъзгласили Търново за столица на новото българско царство. Средновековният град се разраства бързо и се развива като най-непревземаемата българска крепост през 12 – 14 век. Превръща се в най-значимия политически, икономически, културен и религиозен център на България. Като столица по време на Второто българско царство (1187 – 1393), той е разположен на 4 хълма – Царевец, Трапезица, Света гора и Девинград. Според съвременници, през средновековието Търново е бил новият Йерусалим, Рим и Константинопол, и то взети заедно.[9] В града се свиква Църковен събор и се създава автокефалната Търновска архиепископия начело с архиепископ Василий.[10] На мястото на днешната гара Трапезица" />
        <Article key={4} title='Конниците' photo={filed} description="Паметникът на Асеневци е уникален по своя замисъл, художествено и техническо изпълнение. Той е издигнат в центъра на старата столица В.Търново, на скалистия нос на един от завоите на река Янтра, създаващ усещането за естествен амфитеатър. Паметникът е построен във връзка с националния юбилей, посветен на 800 годишнината от въстанието на братята Асен и Петър. В цялостната му композиция обаче са изобразени не само двамата братя като създатели и първи владетели на Втората българска държава, но и двамата най-видните представители на династията на Асеновци, превърнали България в най-силната държава на Балканите. Цар Калоян е третият брат, който сяда на български престол. Той се проявил като голям държавник, дипломат и особено като воин. През 1205 г. в битката край Одрин той разгромил  латинската армия и пленил самия император Балдуин. При царуването на цар Иван Асен ІІ, който е син на Асен, България завоюва огромни териториални разширения, граничещи с три морета. През 1230 г. в битката при Клокотница Иван Асен ІІ разгромил византийските войски и пленил императора Теодор Комнин с цялото му семейство." />
        <Article key={5} title='Майка България' photo={filee} desctiption="Създаден в знак на почит към загиналите участници в българските войни за освобождение. Паметникът се намира в самия център на града, дори често се смята, че той е центърът на Велико Търново. Посветен е на загиналите в четири войни - Руско- урската, Сръбско-българската, Балканската и Първата световна война. Паметникът е построен в прослава на загиналите войни със средства, дарени от населението на Велико Търново. "/>
      </div>
    );
  }
}
