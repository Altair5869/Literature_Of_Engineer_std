import React, { useState} from 'react';
import './App.css';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import WorkDetailComponent from './WorkDetailComponent';
import Notices from './Notices';
import Inquiries from './Inquiries';
import RelatedSites from './RelatedSites';
import Kakao from './kakao';

function App() {
  const MAX_VISIBILITY = 3;

  const cardsData = [
    {
      title: '김삿갓',
      content: <div>
      <img src="/media/산.jpg" alt = "satgat" className="satgat"/>
      <p className='subtitle'>방랑시인의 대명사 김삿갓, 그의 생애와 작품은??</p><br/>
      김삿갓의 본명은 '김병연'으로 홍경래의 난에 연루되었던 선천 부사 김익순의 손자이다. <br/>
      김익순은 홍경래의 난에서 적장의 목을 베어왔다고 임금에게 거짓을 고해 사형을 당하였다.
      그리고 세월이 지나 김삿갓은 과거 시험을 보며, 시험으로는 선천 부사 김익순을 논박하라였고 이에 김삿갓은<br/>
      <b>"선왕이 보고 계시니 너는 만 번 죽어 마땅하리, 네 치욕은 동국에 길이 웃음거리로 남으리라!"</b>라고 답하였다.<br/>
      이로 인해 급제를 하였으나 집에 돌아와 그의 어머니에게 김익순이 자신의 조부, 즉 할아버지라는 것을 알고 충격을 먹는다.<br/>
      이후 4년간 폐인처럼 지내다가 20세가 되었을 때, 방랑 생활을 시작하게 된다.
      <br/>
      <br/>
      김삿갓의 방랑생활 중, 그가 지은 시들은 많지만 대표적인 시들을 소개하자면 아래와 같다.<br/>
      <br/>
      <div className="wrap">
        <div className="box">김삿갓이 밥을 얻어 먹으려고 간 집에서 안주인이 '人良卜一(인량복일)하오리까?' 하니 집주인은 '月月山山(월월산산)하거든.'이라 했다.<br/>
        이에 김삿갓은 '丁口竹夭(정구죽요)로구나 이 亞心土白(아심토백)아.'하고 나가버렸다.<br/>
        이는 한자의 파자를 이용한 말장난으로, <b>人良卜一(인량복일)은 人+良 = 食(밥 식), 卜+一 = 上(윗 상)으로 "밥을 올릴까요"</b>의 뜻이고, <b>月+月 =  朋(벗 붕), 山+山 =  出(날 출)으로 "이 친구가 나가고"</b>란 의미이다.<br/>
        그리고 김삿갓의 답은 <b>丁+口 = 可(옳을 가), 竹+夭 = 笑(웃을 소)는 "가소롭구나", 亞+心 = 惡(나쁠 악), 土+白 = 者(놈 자) "나쁜 놈아"</b>란 의미이다.<br/>
        즉 김삿갓은 이미 무슨 의미인지를 알고 그에 걸맞는 대답을 하였음을 알 수 있다.</div>
        <div className="box">시골 훈장이 밥을 얻어먹기를 청하는 김삿갓을 내쫓기 위해 覓(찾을 멱) 4개로 운을 띄어 시를 짓게 하였다. 그러자 김삿갓이 답하기를, <br/>
        <b>許多韻字何呼覓 많고 많은 운자들 중에 하필 멱자 부르는가<br/>
        彼覓有難況此覓 첫 멱자도 어려웠거늘 이번 멱자 어이할까<br/>
        一夜宿寢懸於覓 하룻밤 묵을 수 있을지가 멱자에 달렸는데<br/>
        山村訓長但知覓 산동네의 서당 훈장은 멱자 밖에 모르는가<br/>
        </b>
        이에 훈장은 감탄하여 제대로 된 식사를 대접하고, 하룻밤을 지내게 해줬으며 약간의 여비도 내주었다고 전해진다.
        </div>
        <div className="box">어느 시골에서 노인의 회갑연이 열렸고, 이에 김삿갓은 밥을 얻어 먹기위해 회갑연에 들어가 즉석으로 축시를 짓는다고 하며 그 자리에서 짓게된다.<br/>
        첫 소절은 <b>披坐老人非人間(피좌노인비인간)</b> 뜻은 <b>"저 앉아있는 노인은 사람이 아니다."</b>이다. 이에 노인의 가족들은 화가 치밀어 몰매를 치고 내쫒으려 했으나, 두번째 소절에 감탄하게 된다.<br/>
        두번째~마지막 소절은<br/>
        <b>疑是天上降神仙(의시천상강신선) 천상에서 내려 온 신선 같구나<br/>
        膝下七子皆盜賊(슬하칠자개도적) 슬하 일곱 아들들 다 도둑이니<br/>
        偸得天桃獻壽宴(투득천도헌수연) 천도복숭아 훔쳐와 잔치 빛낸다.<br/></b>
        김삿갓의 시에 감탄한 노인과 가족들은 여러 날동안 그를 대접했으나, 그가 떠나기로 마음 먹자 더 있어달라고 사정하였고
        그럼에도 김삿갓이 떠나려 하자 여비를 두둑히 주며 아쉬워 했다고 한다.
        </div>
      </div>
      <br/>
      이렇듯 빼어난 시를 짓는 실력을 지닌 김삿갓은 10년 단위로 자신의 아내, 자식들을 보고 또 방랑 생활을 지내곤 했으나<br/>
      말년에 접어들게 되자 건강이 나빠졌고 전라도 동북현에서 알고 지낸 '안 초시'의 집에 방문했을 때 쓰러져 그의 사랑방에서 치료를 받다가<br/>
      <br/>
      <b>"안 초시..춥구려. 어머니가 보고 싶소... 저 등잔...불을...꺼 주시오..."</b><br/><br/>
      이 말을 유언으로 57세의 나이로 숨을 거두었다.
      <br/>
      이후 그는 강원도 영월군 김삿갓면 와석리에 묻히게 되었다.
      <hr/>
      <img src = "/media/김삿갓묘.jpeg" alt = "myeo" className="myeo"/>
      <h5 className="inst">(강원도 영월군 김삿갓면 와석리에 있는 김삿갓의 묘)</h5>
      <h3>영월에서 둘러볼만한 곳</h3>
      <hr/>

      <div className="enjoy">
        <div className="box2"><img src = "/media/선암마을.jpeg" alt = "maeul" className="maeul"/><text>한반도 모양의 선암마을을 보며 산책 어떠세요?</text></div>
        <div className="box3"><Kakao lat={37.22033} lng={128.3473}/></div>
      </div>
      <div className="enjoy">
      <div className="box2"><img src = "/media/동강한우.jpeg" alt = "hanu" className="hanu"/><text>먹거리가 빠질 순 없죠! 한우 어때요?</text></div>
      <div className="box3"><Kakao lat={37.18228} lng={128.4662}/></div>
      </div>      
      <div className="enjoy">
      <div className="box2"><img src = "/media/와이파크.jpeg" alt = "why" className="why"/><text>MZ의 영월 트렌드, 젊은달와이파크에서 기념사진!</text></div>
      <div className="box3"><Kakao lat={37.27413} lng={128.2691}/></div>
      </div>


      </div>,
      imageUrl: '/media/김삿갓.webp'
    },
    {
      title: '메밀꽃 필 무렵',
      content: <div>
        <img src="/media/메밀꽃.jpg" alt = "memil" className="memil"/>
        <p className='subtitle'>이효석 작가의 대표소설, 메밀꽃 필 무렵</p>
        1936년 10월의 어느 날, 잡지 '조광'에 수록된 '모밀꽃 필 무렵'이란 제목의 단편 소설, 훗날 메밀꽃 필 무렵으로 알려지게 될 이 소설은 그렇게 세상에 알려졌다.
        <br/><br/>
        강원도 평창군 봉평면을 배경으로 담은 이 소설의 줄거리는, 장돌뱅이인 '허 생원'은 우연히 젊은 장돌뱅이 '동이'를 만나 장터로 가는 길에 동행하게 된다. 그리고 달빛 아래의
        메밀꽃 밭에서 젊었을 적 물레방앗간에서 있었던 성 서방네 처녀와의 이야기를 회상하게 된다. 이에 동이도 자신의 과거를 들려주며 친부를 몰랐기에 알고싶다고 말한다.
        이야기가 진행되면서 둘의 공통점이 늘어나는데, <b>허 생원은 자신과 마찬가지로 왼손에 채찍을 드는 동이를 보게 된다.</b> 이후 동이의 어머니가 있다는 제천장으로 가며 열린 결말을 맺는다.
        <br/>
        <h3>이효석, 그의 생애</h3>
        <hr/>
        1907년 2월 23일, 강원도 평창에서 태어난 이효석은 그가 8살이될 때 새어머니와의 관계가 좋지 않아 지인의 집에서 하숙을 하며 지냈다.
        하숙생활에서 그는 "메밀꽃 필 무렵"의 배경과 물놀이와 고기잡이 꽃놀이를 즐긴 경험, 그리고 특히 '오대산에서 내려오는 목기류 행상, 심마니의 모습, 머루와 다래 같은 산과, 꿀 뜨기, 농산물 품평회' 등을 본 기억은 그의 작품의 바탕이 될 정도로 큰 영향을 주었다.
        이후 1920년 4월에 이효석은 조선 최고의 고등보통학교인 '경성제일고등보통학교'에 입학해 평생의 벗이자 1년 선배인 '유진오'를 만나게 되었고
        서로 평을 교환해 서구 문학을 섭렵하였다. 이효석은 소설을 썼고 유진오는 시를 쓰며 서로의 작품을 돌려 읽고 비평하며 우정을 다졌다.<br/>
        이후 대학교를 졸업하고 은사의 추천으로 1932년 초, 조선총독부 경무국 산하 도서과 검열계 서기로 취업하였으나 양심의 가책과 세간의 비난을 견디지 못하고 불과 보름 만에 사직하고 말았다.        
        화려한 경성에서의 비참한 도시 빈민의 모습을 그린 대학 시절의 등단작 '도시와 유령', 그리고 소련을 그린 '노령근해', '상륙', '북국사신' 등, 활동 초기 이효석은 동반자 작가로 분류될 만큼 사회주의 경향이 짙은 작품들을 썼다.<br/>
        시간이 지나 1932년엔 아내가 있는 함경북도 경성군으로 가 경성공립농업학교의 영어교사로 취직했으며, 동시에 향토적,이국적 모티브를 중심으로 한 작품세계를 시적인 문체로 제작한 작품들을 잇달아 발표하였다.
        대표적으로는 '오리온과 능금'을 시작으로 '돈', '수탉' 등이 있다.<br/>
        이후 차남 영주가 태어났으나 1940년, 아내와 차남 둘 다 병으로 세상을 떠 큰 충격을 받고 1941년 뇌막염에 걸려 대수술을 받았다. 이후 병마로 고생하다가 1942년 5월 25일, 평안남도 평양부 기림정의 자택에서 35세의 나이로 숨을 거둔다.<br/>
        현재 그의 시신은 경기도 파주시 동화경모공원에 있다.<br/>
        <h3>그의 다른 작품</h3>
        <hr/>
        <div className="wrap2">
          <div className="box">
            <img src="/media/오리온과 능금.jpg" alt = "book" className="book"/>
            <text className="bookdet">주인공 '나'는 S의 소개로 '연구회'에 입회한 백화점 여점원 '나오미'를 만날수록 동지보단 여자란 느낌에 강하게 이끌린다.<hr/>
            인간의 원초적 욕망을 은유적으로 응축한 작품.</text>
          </div>
          <div className="box">
          <img src="/media/도시와유령.jpg" alt = "book" className="book"/>
          <text className="bookdet">일정한 일터가 없는 뜨내기 '나'는 어느 날 동료인 김서방과 술 한잔 후 동묘로 노숙하러 들어갔다가 희미한 도깨비불과 산발한 노파를 보게 되는데...<hr/>
          일을 해야하지만 부르주아적 생활을 지향하는 당시 청년들의 분열된 성격과 암울하고 폐쇄된 시대의 지식인들의 비극을 다룬 작품</text>
          </div>
        </div>
        <br/>
        <h3>둘러볼만한 곳</h3>
        <hr/>
        <div className="enjoy">
          <div className="box2">
          <img src = "/media/이효석생가.jpeg" alt = "sangga" className='maeul'/>
          이효석 작가의 생가를 구경하고 바로 옆 '메밀꽃 필 무렵' 음식점에서 맛있는 한 끼 어떠세요?
          </div>
          <div className="box3"><Kakao lat={37.61096} lng={128.3603}/></div>
        </div>
        <div className="enjoy">
          <div className="box2">
          <img src = "/media/카페마카.jpeg" alt = "cafe" className='maeul'/>
          메밀꽃밭을 바라보는 강변카페에서 여유로운 커피 한 잔은 거절하기 힘들죠!
          </div>
          <div className="box3"><Kakao lat={37.61619} lng={128.3723}/></div>
        </div>
      </div>,
      imageUrl: '/media/메밀꽃_필_무렵.gif'
    },
    {
      title: '동백꽃',
      content: <div>
        <img src="/media/노란꽃.jpg" alt = "sanggang" className="sanggang"/>
        <p className='subtitle'>실레마을의 겨울, 그리고 봄</p>
        1936년의 따뜻한 5월, 잡지 '조광'에 실린 하나의 단편소설. 한국인들이 가장 많이 알고있는 문학 중 하나인 '동백꽃'은 작가 '김유정'에 의해 세상에 나오게 되었다.
        <br/><br/>
        소작농의 아들이자 마름의 데릴사위인 '나'는 그의 딸 '점순'이와 결혼하기 위해 몇년간 한 푼도 받지 않고 일하지만 장인인 '봉필'은 점순이가 아직 어리다는 핑계로 결혼시키지 않는다. 
        그러던 중 점순이는 나에게 "느 집엔 이거 없지? 너 봄 감자가 맛있단다."며 나를 놀리는 듯하며 귀찮게 한다. 이후 나의 집 닭과 점순이의 집 닭을 싸움 붙이는 데, 나의 집 닭이 
        싸움으로 죽어가자 홧김에 점순이네 수탉을 때려 엎어 죽여버린다. "이놈아! 너 왜 남의 닭을 때려 죽이니?", "그럼 어때?", "뭐 이 자식아! 누 집 닭인데?", 그제서야 무슨 짓을 한 것인지 깨달은 나는
        엉엉 울음을 터뜨리고 점순이가 다가와 "너 이담부턴 안그럴테냐?" 라고 하며 "닭 죽은 건 염러 마라,내 안 이를 테니"라며 타이른다.<br/>
        <b>'그리고 뭣에 떠다밀렸는지 나의 어깨를 짚은 채 그대로 퍽 쓰러진다. 그 바람에 나의 몸뚱이도 겹쳐서 쓰러지며, 한창 피어 퍼드러진 노란 동백꽃 속으로 폭 파묻혀 버렸다. 알싸한, 그리고 향긋한 그 냄새에 나는 땅이 꺼지는 듯이 온 정신이 고만 아찔하였다.'</b><br/>
        이후 점순이의 어머니가 점순이를 찾자, 겁을 잔뜩 먹은 점순이는 엉금엉금 기어 산 밑으로 내려가고, 나는 바위를 끼고 엉금엉금 기어서 산 위로 치빼지 않을 수 없었다.
        <br/>
        <h3>김유정은 누구인가?</h3>
        <hr/>
        1908년 2월 12일, 강원도 춘천의 실레마을에서 태어난 김유정은 10살도 채 되기 전에 부모가 모두 세상을 떠나 내성적이고 소심한 성격을 지니게 되었다. 
        게다가 늑막염과 치질에까지 걸려 건강이 매우 악화 되었다.
        1930년 여름, 김유정은 형 김유근이 있는 고향 춘천의 실레마을로 내려간다. 김유근을 상대로 재산 분배 소송을 내기 위한 것이었다.<br/>
        김유근은 김유정을 비롯한 다른 식솔들에는 관심도 없이 물려받은 재산을 혼자 탕진하여, 김유정이 평생 가난에 시달리며 불행하게 죽는 데 기여한 원인의 제공자다. 안타깝게도 김유정은 소송에 실패하고 말았다.
        춘천으로 내려간 그는 들병이들과 어울리며 술에 빠져 살았다고 하는데, 박녹주에 대한 미련이 여기저기 떠돌며 술을 파는 들병이로 옮겨진 것이다. 들병이가 등장하는 작품 '솥', '산골 나그네', '총각과 맹꽁이' 등은 이때의 경험담을 기반으로 제작되었다고 한다.<br/>
        이후 김유정은 매형 정씨의 주선으로 병도 휴양할 겸 충청도의 어느 광업소 현장감독으로 내려갔다. 
        하지만 그는 이곳에서조차 광부들과 어울려 매일 술만 마시며 그나마 남아 있던 돈을 다 써 버려 빈털터리나 다름없는 여생을 보냈다. 
        결국 건강만 더 악화된 채 고향 실레마을로 돌아왔는데, 광산에서의 경험은 훗날 그의 소설 '금 따는 콩밭', '노다지', '금' 등의 모티브가 되었다.<br/>
        유산을 상속받은 맏형 김유근이 방탕한 생활로 자산을 다 날려먹었기 때문에, 경성과 춘천의 집을 팔 지경에 이르렀을 정도로 집안이 기운다. 
        이에 김유정은 1933년부터 경기도 광주에 있던 큰누나에게 얹혀살게 되었지만, 이미 치질의 고통에 늑막염이 폐결핵으로 악화되어 항상 누워있는 신세였다.
        큰누나는 공장 노동자들에게 밥을 팔며 살았는데, 그녀의 남편 정씨는 일도 안 하고 놀고 먹으면서 아내를 상습적으로 폭행하고 유정을 헐뜯으며 나가라는 압박을 주는 인간말종이었다.
        큰누나는 정씨와의 심한 불화에서 생기는 스트레스를, 병으로 누워 있는 김유정에게 "내가 고생해서 벌어온 돈이 아깝다. 네놈은 돈은 못 벌어오고 집에 가만히 누워있기만 하냐! 취직이라도 좀 해라."라고 잔소리를 하며 풀었다.
        큰누나는 그가 험한 일을 하다가 그나마도 좋지 않은 건강이 더 악화되는 것이 염려되어 사과하였고, 둘은 화해했다. 그러나 그는 매형이 싫었기 때문에 거처를 큰누나 집에서 다섯째 누나의 집으로 옮겼다.<br/>
        이러한 그의 모습을 쭉 안타깝게 지켜보던 절친한 친구인 소설가 안회남은 그에게 "차라리 밖에 나가서 소설을 써보는 것이 어떻겠니?"라고 제안하였고, 
        그는 비로소 1934년 본격적으로 문학에 대한 열정을 품고 구인회에 가입했다. 그 결과 1935년 1월 소설 소낙비 등으로 신춘문예에 당선되어 등단했다.<br/>
        그러나 불행하게도 그는 등단한 지 2년 만인 1937년 3월 29일에 결핵과 치질이 악화되어 29세의 나이로 요절하고 말았다. 
        이 2년 동안 그는 수많은 집필 활동을 했는데, 단편작들을 모두 이때 집필하였고 미완성이었던 장편과 번역본까지 한 권 만들었다. 이렇게 그가 2년 동안 남긴 작품은 무려 30여 편이나 된다. 
        그의 열정이나 문학적 재능이 얼마나 대단했는지 알 수 있는 대목이다. 
        장례는 그의 형제, 조카들, 친구 안회남에 의해 화장으로 치러져 한강에 유골이 뿌려졌다.
        <h3>김유정과 박녹주</h3>
        <hr/>
        어려서부터 부모를 여읜 탓인지, 김유정은 생전 늘 어머니의 사진을 품에 지니고 다닐 정도로 애정결핍이 심했고 연상의 여성에 대한 맹목적인 환상과 집착 증세가 있었다.
        특히 연희전문학교에 재학하던 시절 소리계에서 유명한 박녹주 명창에 대한 이야기로 유명하다.<br/>
        어느날 우연히 김유정은 목욕을 마치고 목욕탕 문 앞에 서 있던 박녹주를 보고 첫눈에 반했다. 1928년 봄 조선극장에서 열린 8도 모창대회에 박녹주 명창이 출연한다는 소식을 접한 그는, 대회가 끝난 후 수소문하여 그녀의 대기실에 찾아갔다고 한다.<br/>
        박녹주와 대화를 나눈 후 김유정은 본격적으로 박녹주를 연모하게 되어, 편지를 보내 정식으로 그녀에게 고백했다. 이미 1920년에 원산시의 부호 남백우와 살림을 차렸던 박녹주는 그의 편지를 찢어 버렸으나 그래도 한 번 정도 만나보는 게 어떠냐라는 친구의 말을 듣고 김유정을 집으로 불렀다.
        박녹주는 김유정에게 "나는 이미 남편이 있는 몸이니 쓸데없는 생각 말고 공부나 열심히 하라"라고 점잖게 타일렀지만, 김유정은 "당신을 진정으로 사랑하는 사람은 나"라면서 막무가내였다. 
        이때의 일로 그녀의 남동생 태술과 친해진 김유정은 그를 통해 본격적으로 각종 선물이나 레코드판에서 뜯어낸 박녹주의 사진 밑에 ‘당신을 연모합니다. 저의 사랑을 받아주옵소서’라고 적힌 편지 등을 박녹주에게 보내기 시작한다. 
        주변인들의 증언에 의하면 김유정은 이미 늑막염을 앓고 있음에도 불구하고 이때부터 술을 마시기 시작했다고 한다. 
        물론 박녹주는 그가 이러한 편지들을 보내는 족족 갖다 버렸다.<br/>
        그러자 김유정은 박녹주에게 "당신이 무슨 상감이나 된 듯이 그렇게 고고한 척하는 거요. 보료 위에 앉아서 나를 마치 어린애 취급하듯 한 것을 생각하면 지금도 분하오. 그러나 나는 끝까지 당신을 사랑할 것이오. 당신이 사랑을 버린다면 내 손에 죽을 줄 아시오."란 내용의 협박 편지나
        "엊저녁에는 네가 천향원으로 간 것을 보고 문 앞에서 기다렸으나 나오지 않았다.
        만일 그때 너를 만났다면 나는 너를 죽였을 것이다.
        그러나 좋아하지 마라.
        단 며칠 목숨이 연장될 따름이니까." 란 내용의 혈서를 보내는 등 여러 기행 행위를 하였고, 참다 못한 박녹주는 김유정을 집에 불러 들여 "무슨 학생이 공부는 안 하고 편지질이오? 학생과 기생이 무슨 연애를 하자는 말이요? 학생이 이러면 나도 가슴이 아프오. 공부를 끝내면 다시 나를 찾아 주시오."
        라고 말하고 김유정은 이에 대들며 "도대체 네가 사람이냐"란 식으로 말을 하다 너무 큰 소리를 쳐서 미안하다면서 사과했다고 한다. <br/>
        이후 김유정의 스토킹은 멈추게 되었고
        박녹주는 순천의 거부인 김종익과 결혼하게 되었다. 
        그리고 29세의 나이로 요절한 김유정의 방 안에는 '녹주, 너를 연모한다'라는 혈서가 붙어있었고, 박녹주는 훗날 회고록에 "김유정에게 너무 박절하게 대한 벌을 뒤늦게 받아 내가 평생 슬하에 자식 없이 살았나 보오. 그가 그토록 훌륭한 소설가라는 것을 알았더라면 손이라도 한 번 잡게 해 줄 것을."이라는 말을 남겼다고 한다.
        <br/>
        <h3>또 다른 작품들</h3>
        <hr/>
        <div className="wrap2">
          <div className="box">
            <img src="/media/소낙비.webp" alt = "book" className="book"/>
            <text className="bookdet">흉작과 빚으로 농토를 잃은 유랑민 '춘호'는 산골 마을로 찾아든다. 그는 노름에 빠져 돈을 탕진하고 아내의 매음을 통해 가난을 극복하고자 한다.<hr/>
            궁핍한 농촌을 배경으로 순박하지만 어리석은 1930년대 사람들의 애환을 그린 작품.</text>
          </div>
          <div className="box">
          <img src="/media/산골나그네.jpeg" alt = "book" className="book"/>
          <text className="bookdet">여자인 나그네는 산골 어느 주막의 홀어머니와 그의 아들 '덕돌'이에게 호의를 입어 그곳에서 지내며 일하게 되고, 일을 잘하자 덕돌이와 혼인하라며 홀어머니와 같이 살자고 하는 덕돌이에게는 몸을 허락하게된다.
          그러던 중 나그네는 덕돌이의 옷을 훔쳐 달아나는데...
          <hr/>
          토속적인 서민의 어휘와 아이러니함이 어울려진 김유정의 작품이자 인간주의에 바탕을 둔 불행한 시대의 서민의 삶을 표현한 작품
          </text>
          </div>
        </div>
        <br/>
        <h3>둘러볼만한 장소</h3>
        <hr/>
        <div className="enjoy">
          <div className="box2">
          <img src = "/media/김유정역.jpeg" alt = "sangga" className='maeul'/>
          아날로그 감성이 있는 역과 북 카페에서 한적한 시간!
          </div>
          <div className="box3"><Kakao lat={37.81841} lng={127.7142}/></div>
        </div>
        <div className="enjoy">
          <div className="box2">
          <img src = "/media/김유정 생가.jpeg" alt = "cafe" className='maeul'/>
          김유정의 생가를 구경하고 문학촌에서 도자기체험 어때요?
          </div>
          <div className="box3"><Kakao lat={37.81831} lng={127.7177}/></div>
        </div>

      </div>,
      imageUrl: '/media/동백꽃 소설.webp'
    }
  ];

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const Carousel = ({children}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    
    return (
      <div className='carousel'>
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
        {React.Children.map(children, (child, i) => (
          <div className='card-container' style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
      </div>
    );
  };

  return(
    <Router>
    <div className="App">
    <header>
          <Link to="/" className="home-button"><img src='/media/홈.png' alt='home' className='home-icon'/></Link>
        </header>
      <Routes>
        <Route path="/" element={
          <div>
          <img src="/media/몽유도원도.jpg" alt="background" width="1500px" height="380px" className="background-image"/>
          <div className="title1">공대생의</div>
          <div className="title2">강원의 문학</div>
          <img src="/media/새.png" alt = "bird" className="bird"/>
          <img src="/media/blackbrush.png" alt = "brush" className="brush"/>
          <img src="/media/brush2.png" alt = "brush" className="brush2"/>
          <img src="/media/flower.png" alt = "flower" className="flower"/>
          <img src="/media/flower.png" alt = "flower" className="flower2"/>
          <img src="/media/flower.png" alt = "flower" className="flower3"/>
          <img src="/media/flower.png" alt = "flower" className="flower4"/>
          <img src="/media/flower.png" alt = "flower" className="flower5"/>
          <img src="/media/flower.png" alt = "flower" className="flower6"/>
          <img src="/media/flower.png" alt = "flower" className="flower7"/>
          <img src="/media/flower.png" alt = "flower" className="flower8"/>
          <img src="/media/flower.png" alt = "flower" className="flower9"/>
          <img src="/media/flower.png" alt = "flower" className="flower10"/>
          <img src="/media/flower.png" alt = "flower" className="flower11"/>
          <img src="/media/flower.png" alt = "flower" className="flower12"/>
          <img src="/media/flower.png" alt = "flower" className="flower13"/>
          <Carousel>
            {cardsData.map((card, i) => (
              <Link key={i} to={`/WorkDetail/${card.title}`}>
              <img src={card.imageUrl} alt={card.title} content={card.content} className='cardImage'/>
            </Link>
            ))}
          </Carousel>
          <div>
          <img src = "media/산2.png" alt ="mountain2" className="mountain2"/>
          <span> 
          <img src = "/media/산1.png" alt = "mountain1" className="mountain1"/>
          <img src = "/media/산1.png" alt = "mountain3" className="mountain3"/>
          <img src = "/media/산1.png" alt = "mountain4" className="mountain4"/>
          </span> 
          </div>
        </div>
        } />
        <Route path="/WorkDetail/:title" element={<WorkDetailComponent cardsData={cardsData} />} />
        <Route path="/Notices" element={<Notices />} />
        <Route path="/Inquiries" element={<Inquiries />} />
        <Route path="/RelatedSites" element={<RelatedSites />} />
      </Routes>
      <footer className="footer">
          <Link to="/Notices">공지</Link>
          <Link to="/Inquiries">문의사항</Link>
          <div className="dropup" onMouseOver={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
            <text>
              관련 사이트
            </text>
            {dropdownVisible && (
              <div className="dropup-content">
                <a href="https://chuncheon.museum.go.kr/kor/index.do" target="_blank" rel="noopener noreferrer">국립 춘천 박물관</a>
                <a href="https://state.gwd.go.kr/portal" target="_blank" rel="noopener noreferrer">강원 특별 자치도청</a>
              </div>
            )}
          </div>
        </footer>
    </div>
  </Router>
  
  );
}

export default App;
