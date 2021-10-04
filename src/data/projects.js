import nomalog1 from '../images/projects/nomalog1.PNG';
import nomalog2 from '../images/projects/nomalog2.PNG';
import nomalog3 from '../images/projects/nomalog3.PNG';
import nomalog4 from '../images/projects/nomalog4.PNG';
import cardMaker1 from '../images/projects/cardMaker1.PNG';
import cardMaker2 from '../images/projects/cardMaker2.PNG';
import youtube2 from '../images/projects/youtube2.PNG';
import youtube1 from '../images/projects/youtube1.PNG';
const projects = [
    {
        name: "Nomalog v1.6.5",
        period: "1차 2021.07.19 - 08.14 ( 1인 프로젝트 )",
        domain: "https://nomalog.netlify.app",
        desc: [
            "이전에 Firebase를 이용해 로그인과 CRUD를 구현해본 적이 있습니다. 구현 방법을 아는 것과 별개로 서버와 DB의 개념, API 통신 원리 등은 막연하게만 느껴졌고, 이에 Node와 MongoDB, pug로 진행되는 백엔드 강의를 들었습니다. 이후 새롭게 배운 백엔드 지식을 체화시키기는 시간이 어느 정도 필요하다고 생각되었고, MERN Stack으로 실제 서버와 DB를 둔 CRUD를 연습해보면 좋을 것 같아 블로그 프로젝트를 진행하게 되었습니다.",
            "평소 자주 사용하는 플랫폼 velog에서 느꼈던 장점들(심플한 UI, 쉬운 태그 생성)을 일부 따왔고, 불편했던 점(폴더의 부재, 에디터 공간 분할)을 개선하고, UI를 좀더 웹 어플리케이션 같은 느낌으로 개인적인 취향을 반영해 제작하였습니다.",
            "혼자 힘으로 프로젝트 초기 구조 설정부터 서비스 기획, 구현, 배포까지 진행하면서 CRUD 구현과 OAuth 2.0의 흐름, CORS와 쿠키, JWT토큰 등에 대해 명확하게 이해할 수 있었고, 여러 기업의 소셜 로그인을 지원해 보면서 OAuth 2.0의 흐름에 익숙해질 수 있었습니다. 또한 디자인까지 다 한 적은 처음이라 직관적인 UI, 좋은 UX를 제공하기 위해 많은 고민을 해볼 수 있었습니다.",
            "이 외 개발 중 어려웠던 점과 극복 과정, 자세한 기능 소개 및 프로젝트 버전 업데이트 관련 내용은 아래 깃허브 리드미를 통해 보실 수 있습니다."
        ],
        features: [
            "일반 로그인 및 회원 가입",
            "소셜 계정으로 로그인(깃허브, 카카오, 구글, 네이버)",
            "사용자, 폴더, 게시글 CRUD ",
            "게시글 전체 및 사용자별 검색 ",
            "프로필 및 썸네일 이미지 업로드 ",
            "현재 위치의 날씨 제공"
        ],
        callout: "네이버와 구글 로그인은 검수 허가가 안나서 현재 관리자 계정으로만 로그인이 가능한 상태입니다.",
        experience: "lodash로 입력 이벤트 debounce, react-tooltip-lite를 이용한 툴팁 제공, 소셜 로그인의 다양한 구현 방법(Rest API/JavaScript SDK/라이브러리) 경험",
        imgArray: [nomalog2, nomalog1, nomalog3, nomalog4],
        github: "https: //github.com/Noma98/blog-project-front#nomalog-v165",
        front: "React, React Router, PostCSS",
        back: "NodeJS(express), MongoDB(moogoose), AWS S3",
        deploy: "Netlify, Heroku"
    },
    {
        name: "Noma - Business Card Maker",
        period: "1차 2021.03.19 - 04.04, 확장 05.08 - 05.13 ( 1인 프로젝트 )",
        domain: "https://merry-business-card-maker.netlify.app",
        desc: [
            "드림코딩 아카데미에서 리액트 커리큘럼을 공부하면서 만든 명함 제작 프로젝트로, 일부 기능을 추가/제거하고 UI를 변경했습니다. Firebase를 이용해 처음 소셜 로그인을 구현해보았고, 여기서 얻어온 UUID로 사용자를 구분하여 Realtime Database에 명함을 CRUD 할 수 있도록 만들었습니다. 또한 Cloudinary를 통해 사용자가 원하는 이미지를 서버에 업로드하여 언제 어디서든 이미지를 볼 수 있도록 했습니다.",
            "추가적으로 소셜 아이디가 없을 경우에도 서비스를 시험적으로(데이터 저장X) 사용해 볼 수 있도록 게스트 로그인 기능을 구현하였고, 기존에 명함 정보를 입력해야 카드가 만들어지는 방식에서 카드를 만들고(+버튼) 정보를 입력하는 방식으로 변경했습니다. 또한 특별히 사용할 이미지가 없을 경우 간단하게 선택해서 쓸 수 있는 아바타 팔레트 기능을 구현했고, 만들어진 카드를 검색할 수 있도록 만들었습니다."
        ],
        features: [
            "소셜 및 게스트 로그인",
            "명함 실시간 생성/수정/삭제",
            "명함 검색 기능",
            "기본 아바타 팔레트 제공",
            "이미지 업로드 기능"
        ],
        experience: "Firebase를 이용한 CRUD, Cloudinary를 이용한 이미지 업로드, 리액트 라우터 사용",
        imgArray: [cardMaker1, cardMaker2],
        github: "https://github.com/Noma98/Business-Card-Maker#noma---business-card-maker",
        front: "React, React Router, PostCSS",
        back: "Firebase, Cloudinary",
        deploy: "Netlify"
    },
    {
        name: "Youtube Clone",
        period: "1차 2020.03.03 - 14, 확장 04.19 - 27",
        domain: "https://merrytube.netlify.app",
        desc: [
            "드림코딩 아카데미에서 리액트 기초를 배우고 연습하는 과정에서 만든 유튜브를 클론 프로젝트입니다.",
            "리액트 기초와 다양한 hook들을 사용하는 연습을 할 수 있었고, Youtube API으로 처음으로 데이터 통신을 해봤습니다. ",
            "클론 코딩인 만큼 UI를 실제 유튜브와 최대한 비슷하게 구현하고자 노력했습니다."
        ],
        features: [
            "유튜브 최신 인기 동영상 제공",
            "영상과 관련된 다양한 정보 제공",
            "클릭한 영상과 관련된 영상 추천 기능",
            "유튜브 영상 검색 기능"
        ],
        callout: "Youtube API의 하루 할당량을 초과하게 되면, 영상이 보이지 않을 수 있습니다.",
        experience: "Postman, Youtube API, axios 라이브러리 사용, 첫 리액트 경험, sessionStorage로 상태 유지, matchMedia 사용",
        imgArray: [youtube1, youtube2],
        github: "https://github.com/Noma98/Youtube-Clone#youtube-clone",
        front: "React, React Router, PostCSS",
        deploy: "Netlify"
    }
];
export default projects;

/* Template */
/*
{
        name: "",
        period: "",
        domain: "",
        desc: [
            "",
            "",
            "",
            ""
        ],
        features: [
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        callout: "",
        experience: "",
        imgArray:[],
        github: "",
        front: "",
        back: "",
        deploy: ""
    }
*/