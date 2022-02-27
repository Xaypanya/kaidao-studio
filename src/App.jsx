import { useState, useRef, useEffect } from "react"
import CategoryMenuButton from "./components/CategoryMenuButton";
import ItemMenuButton from "./components/ItemMenuButton";
import KaidaoButton from "./components/KaidaoButton";
import "./index.css"


const hairUrl = {
  hair_1: "/images/female/hair/h (1).png",
  hair_2: "/images/female/hair/h (2).png",
  hair_3: "/images/female/hair/h (3).png",
  hair_4: "/images/female/hair/h (4).png",
  hair_5: "/images/female/hair/h (5).png",
  hair_6: "/images/female/hair/h (6).png",
  hair_7: "/images/female/hair/h (7).png",
  hair_8: "/images/female/hair/h (8).png",
  hair_9: "/images/female/hair/h (9).png",
  hair_10: "/images/female/hair/h (10).png",
  hair_11: "/images/female/hair/h (11).png",
  hair_12: "/images/female/hair/h (12).png",
}
const bodyUrl = {
  body_1: "/images/female/body/b (1).png",
  body_2: "/images/female/body/b (2).png"
}
const eye_browUrl = {
  eye_brow_1: "/images/female/eye_brow/eb (1).png",
  eye_brow_2: "/images/female/eye_brow/eb (2).png",
  eye_brow_3: "/images/female/eye_brow/eb (3).png",
  eye_brow_4: "/images/female/eye_brow/eb (4).png",
  eye_brow_5: "/images/female/eye_brow/eb (5).png",
  eye_brow_6: "/images/female/eye_brow/eb (6).png",
  eye_brow_7: "/images/female/eye_brow/eb (7).png",
  eye_brow_8: "/images/female/eye_brow/eb (8).png",
  eye_brow_9: "/images/female/eye_brow/eb (9).png",
  eye_brow_10: "/images/female/eye_brow/eb (10).png",
  eye_brow_11: "/images/female/eye_brow/eb (11).png",
  eye_brow_12: "/images/female/eye_brow/eb (12).png",
  eye_brow_13: "/images/female/eye_brow/eb (13).png",
  eye_brow_14: "/images/female/eye_brow/eb (14).png",
  eye_brow_15: "/images/female/eye_brow/eb (15).png",
}
const eyesUrl = {
  eyes_1: "/images/female/eyes/e (1).png",
  eyes_2: "/images/female/eyes/e (2).png",
  eyes_3: "/images/female/eyes/e (3).png",
  eyes_4: "/images/female/eyes/e (4).png",
  eyes_5: "/images/female/eyes/e (5).png",
  eyes_6: "/images/female/eyes/e (6).png",
  eyes_7: "/images/female/eyes/e (7).png",
  eyes_8: "/images/female/eyes/e (8).png",
  eyes_9: "/images/female/eyes/e (9).png",
  eyes_10: "/images/female/eyes/e (10).png",
  eyes_11: "/images/female/eyes/e (11).png",
  eyes_12: "/images/female/eyes/e (12).png",
  eyes_13: "/images/female/eyes/e (13).png",
}
const noseUrl = {
  nose_1: "/images/female/nose/n (1).png",
  nose_2: "/images/female/nose/n (2).png",
  nose_3: "/images/female/nose/n (3).png",
  nose_4: "/images/female/nose/n (4).png",
}
const mouthUrl = {
  mouth_1: "/images/female/mouth/m (1).png",
  mouth_2: "/images/female/mouth/m (2).png",
  mouth_3: "/images/female/mouth/m (3).png",
  mouth_4: "/images/female/mouth/m (4).png",
  mouth_5: "/images/female/mouth/m (5).png",
}
const backgroundUrl = {
  background_1: "/images/female/background/bg (1).png",
  background_2: "/images/female/background/bg (2).png",
  background_3: "/images/female/background/bg (3).png",
}
const shirtUrl = {
  shirt_1: "/images/female/shirt/sh (1).png",
  shirt_2: "/images/female/shirt/sh (2).png",
  shirt_3: "/images/female/shirt/sh (3).png",
  shirt_4: "/images/female/shirt/sh (4).png",
  shirt_5: "/images/female/shirt/sh (5).png",
  shirt_6: "/images/female/shirt/sh (6).png",
  shirt_7: "/images/female/shirt/sh (7).png",
  shirt_8: "/images/female/shirt/sh (8).png",
  shirt_9: "/images/female/shirt/sh (9).png",
  shirt_10: "/images/female/shirt/sh (10).png",
  shirt_11: "/images/female/shirt/sh (11).png",
}
  

const iconUrl = {
  hair_icon: "/images/icon/hair-icon.png",
  shirt_icon: "/images/icon/shirt-icon.png",
  eyes_icon: "/images/icon/eyes-icon.png",
  mouth_icon: "/images/icon/mouth-icon.png",
  nose_icon: "/images/icon/nose-icon.png",
  eye_brow_icon: "/images/icon/eyebrow-icon.png",
  background_icon: "/images/icon/background-icon.png"
}




function App() {

  //NOTE get persistant from local storage
  const f_hairPath_Persistant       = localStorage.getItem('f_hairPath_Persistant');
  const f_bodyPath_Persistant       = localStorage.getItem('f_bodyPath_Persistant');
  const f_shirtPath_Persistant      = localStorage.getItem('f_shirtPath_Persistant');
  const f_eyesPath_Persistant       = localStorage.getItem('f_eyesPath_Persistant');
  const f_mouthPath_Persistant      = localStorage.getItem('f_mouthPath_Persistant');
  const f_nosePath_Persistant       = localStorage.getItem('f_eye_browPath_Persistant');
  const f_eye_browPath_Persistant   = localStorage.getItem('f_nosePath_Persistant');
  const f_backgroundPath_Persistant = localStorage.getItem('f_backgroundPath_Persistant');
  const persistantArray = [f_hairPath_Persistant, f_bodyPath_Persistant, f_shirtPath_Persistant, f_eyesPath_Persistant, f_mouthPath_Persistant, f_nosePath_Persistant, f_eye_browPath_Persistant, f_backgroundPath_Persistant];

  const [isFemaleGender, setIsFemaleGender] = useState(true);
  //NOTE current item selected url  logic
  const [f_hairPath, set_f_HairPath] = useState(f_hairPath_Persistant ? f_hairPath_Persistant : hairUrl.hair_1)
  const [f_eye_browPath, set_f_Eye_BrowPath] = useState(f_eye_browPath_Persistant ? f_eye_browPath_Persistant : eye_browUrl.eye_brow_1)
  const [f_eyesPath, set_f_EyesPath] = useState(f_eyesPath_Persistant ? f_eyesPath_Persistant : eyesUrl.eyes_1)
  const [f_nosePath, set_f_NosePath] = useState(f_nosePath_Persistant ? f_nosePath_Persistant : noseUrl.nose_1)
  const [f_bodyPath, set_f_BodyPath] = useState(f_bodyPath_Persistant ? f_bodyPath_Persistant :  bodyUrl.body_2)
  const [f_shirtPath, set_f_ShirtPath] = useState(f_shirtPath_Persistant ? f_shirtPath_Persistant : shirtUrl.shirt_1)
  const [f_mouthPath, set_f_MouthPath] = useState(f_mouthPath_Persistant ? f_mouthPath_Persistant : mouthUrl.mouth_1)
  const [f_backgroundPath, set_f_BackgroundPath] = useState(backgroundUrl.background_1)

  //NOTE category button logic
  const [is_Hair_Open, setIs_Hair_Open] = useState(true)
  const [is_EyeBrow_Open, setIs_EyeBrow_Open] = useState(false)
  const [is_Eyes_Open, setIs_Eyes_Open] = useState(false)
  const [is_Nose_Open, setIs_Nose_Open] = useState(false)
  const [is_Mouth_Open, setIs_Mouth_Open] = useState(false)
  const [is_Shirt_Open, setIs_Shirt_Open] = useState(false)
  const [is_Background_Open, setIs_Background_Open] = useState(false)
  const isOpenArray = [is_Hair_Open, is_EyeBrow_Open, is_Eyes_Open, is_Nose_Open, is_Mouth_Open, is_Shirt_Open, is_Background_Open]


  //NOTE get canvas element tag
  const canvasRef = useRef(null)

  //NOTE total item count
  const f_hair__count = 12;
  const f_eye_brow__count = 15;
  const f_eyes__count = 13;
  const f_nose__count = 4;
  const f_mouth__count = 11;
  const f_shirt__count = 9;
  const f_background__count = 3;

 
  function handleCategory(isItem){
      console.log("selected category = "+isItem);
      if(isItem == "Is_Hair_Open"){
        setIs_Hair_Open(true)
        setIs_EyeBrow_Open(false);
        setIs_Eyes_Open(false);
        setIs_Nose_Open(false);
        setIs_Mouth_Open(false);
        setIs_Shirt_Open(false);
        setIs_Background_Open(false);
      }else if(isItem == "Is_EyeBrow_Open"){
        setIs_Hair_Open(false)
        setIs_EyeBrow_Open(true);
        setIs_Eyes_Open(false);
        setIs_Nose_Open(false);
        setIs_Mouth_Open(false);
        setIs_Shirt_Open(false);
        setIs_Background_Open(false);
      }else if(isItem == "Is_Eyes_Open"){
        setIs_Hair_Open(false)
        setIs_EyeBrow_Open(false);
        setIs_Eyes_Open(true);
        setIs_Nose_Open(false);
        setIs_Mouth_Open(false);
        setIs_Shirt_Open(false);
        setIs_Background_Open(false);
      }else if(isItem == "Is_Nose_Open"){
        setIs_Hair_Open(false)
        setIs_EyeBrow_Open(false);
        setIs_Eyes_Open(false);
        setIs_Nose_Open(true);
        setIs_Mouth_Open(false);
        setIs_Shirt_Open(false);
        setIs_Background_Open(false);
      }else if(isItem == "Is_Mouth_Open"){
        setIs_Hair_Open(false)
        setIs_EyeBrow_Open(false);
        setIs_Eyes_Open(false);
        setIs_Nose_Open(false);
        setIs_Mouth_Open(true);
        setIs_Shirt_Open(false);
        setIs_Background_Open(false);
      }else if(isItem == "Is_Shirt_Open"){
        setIs_Hair_Open(false)
        setIs_EyeBrow_Open(false);
        setIs_Eyes_Open(false);
        setIs_Nose_Open(false);
        setIs_Mouth_Open(false);
        setIs_Shirt_Open(true);
        setIs_Background_Open(false);
      }else if(isItem == "Is_Background_Open"){
        setIs_Hair_Open(false)
        setIs_EyeBrow_Open(false);
        setIs_Eyes_Open(false);
        setIs_Nose_Open(false);
        setIs_Mouth_Open(false);
        setIs_Shirt_Open(false);
        setIs_Background_Open(true);
      }
  }

  useEffect(()=>{
    handleCategory("Is_Hair_Open");
  },[])
 
  useEffect(()=>{
    console.log("trigger handle category")
    console.log("isOpenArray = ", isOpenArray);
  },isOpenArray)

  useEffect(()=>{
    renderImage();
    savePersistant();
    console.log('trigger Create image')
    console.log("persistantArray = ", persistantArray)
  },[f_shirtPath,f_hairPath,f_eye_browPath,f_eyesPath,f_nosePath,f_mouthPath,f_backgroundPath])

  
  // NOTE -----------  generate image by random -----------
  function generateFemale() {
    var hair_rdn = Math.floor(Math.random()*f_hair__count)+1;
    var shirt_rdn = Math.floor(Math.random()*f_shirt__count)+1;
    var eyes_rdn = Math.floor(Math.random()*f_eyes__count)+1;
    var mouth_rdn = Math.floor(Math.random()*f_mouth__count)+1;
    var nose_rdn = Math.floor(Math.random()*f_nose__count)+1;
    var eye_brow_rdn = Math.floor(Math.random()*f_eye_brow__count)+1;
    var background_rdn = Math.floor(Math.random()*f_background__count)+1;

    set_f_HairPath("/images/female/hair/h ("+ hair_rdn+").png")
    set_f_ShirtPath("/images/female/shirt/sh ("+shirt_rdn+").png")
    set_f_EyesPath("/images/female/eyes/e ("+eyes_rdn+").png")
    set_f_MouthPath("/images/female/mouth/m ("+mouth_rdn+").png")
    set_f_NosePath("/images/female/nose/n ("+nose_rdn+").png")
    set_f_Eye_BrowPath("/images/female/eye_brow/eb ("+eye_brow_rdn+").png")
    // set_f_BackgroundPath("/images/female/background/bg ("+background_rdn+").png")
    set_f_BackgroundPath("/images/female/background/bg (1).png")
    set_f_BodyPath("/images/female/body/b (2).png")


    var hair = new Image();
    var eyes = new Image();
    var mouth = new Image();
    var nose = new Image();
    var eye_brow = new Image();
    var body = new Image();
    var shirt = new Image();
    var background = new Image();


    hair.src = f_hairPath;
    body.src = f_bodyPath;
    shirt.src = f_shirtPath;
    eyes.src = f_eyesPath;
    mouth.src = f_mouthPath;
    nose.src = f_nosePath;
    eye_brow.src = f_eye_browPath;
    background.src = f_backgroundPath;

    const onBuild = ([obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8])=> {
      obj1.onload = () => drawImage();
      obj2.onload = () => drawImage();
      obj3.onload = () => drawImage();
      obj4.onload = () => drawImage();
      obj5.onload = () => drawImage();
      obj6.onload = () => drawImage();
      obj7.onload = () => drawImage();
      obj8.onload = () => drawImage();
    }

    const imageObjArray = [hair,body,shirt,eyes,mouth,nose,eye_brow,background];

    onBuild(imageObjArray)


    function drawImage(){
        const position = 0;
        const width = 512;
        const height = 512;
        const canvas = canvasRef.current
        var ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        canvas.style.width  = '100%';
        canvas.style.height = '100%';

        ctx.drawImage(background,((width - background.width)), position);
        ctx.drawImage(body,((width - body.width)), position);
        if(f_hairPath == hairUrl.hair_4){
          ctx.drawImage(shirt,((width - shirt.width)), position);
          ctx.drawImage(hair,((width - hair.width)), position);
        }else{
          ctx.drawImage(hair,((width - hair.width)), position);
          ctx.drawImage(shirt,((width - shirt.width)), position);
        }
        ctx.drawImage(eyes,((width - eyes.width)), position);
        ctx.drawImage(mouth,((width - mouth.width)), position);
        ctx.drawImage(nose,((width - mouth.width)), position);
        ctx.drawImage(eye_brow,((width - eye_brow.width)), position);
    }
  }

  // NOTE -----------  draw image by manual -----------
  function renderImage(){
  
    var hair = new Image();
    var eyes = new Image();
    var mouth = new Image();
    var nose = new Image();
    var eye_brow = new Image();
    var body = new Image();
    var shirt = new Image();
    var background = new Image();

    hair.src  = f_hairPath;
    body.src  = f_bodyPath;
    shirt.src = f_shirtPath;
    eyes.src  = f_eyesPath;
    mouth.src = f_mouthPath;
    nose.src  = f_nosePath;
    eye_brow.src = f_eye_browPath;
    background.src = f_backgroundPath;

    const onBuild = ([obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8])=> {
      obj1.onload = () => drawImage();
      obj2.onload = () => drawImage();
      obj3.onload = () => drawImage();
      obj4.onload = () => drawImage();
      obj5.onload = () => drawImage();
      obj6.onload = () => drawImage();
      obj7.onload = () => drawImage();
      obj8.onload = () => drawImage();
    }

    const imageObjArray = [hair,shirt,body,eyes,mouth,nose,eye_brow,background];
    onBuild(imageObjArray)

    function drawImage(){
        const position = 0;
        const width = 512;
        const height = 512;
        const canvas = canvasRef.current
        var ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        canvas.style.width  = '100%';
        canvas.style.height = '100%';

        ctx.drawImage(background,((width - background.width)), position);
        ctx.drawImage(body,((width - body.width)), position);
        if(f_hairPath == hairUrl.hair_4){
          ctx.drawImage(shirt,((width - shirt.width)), position);
          ctx.drawImage(hair,((width - hair.width)), position);
        }else{
          ctx.drawImage(hair,((width - hair.width)), position);
          ctx.drawImage(shirt,((width - shirt.width)), position);
        }
        ctx.drawImage(eyes,((width - eyes.width)), position);
        ctx.drawImage(mouth,((width - mouth.width)), position);
        ctx.drawImage(nose,((width - mouth.width)), position);
        ctx.drawImage(eye_brow,((width - eye_brow.width)), position);
    }
  }



    
   function saveToDevice(){
      const canvas = canvasRef.current
      var img = canvas.toDataURL('png');
      var hyperlink = document.createElement('a');
      hyperlink.href = img;
      hyperlink.download = "avatar-by-kaidao.png";
      hyperlink.click();
   }


   function savePersistant(){
      localStorage.setItem('f_hairPath_Persistant', f_hairPath);
      localStorage.setItem('f_bodyPath_Persistant', f_bodyPath);
      localStorage.setItem('f_shirtPath_Persistant', f_shirtPath);
      localStorage.setItem('f_eye_browPath_Persistant', f_eye_browPath);
      localStorage.setItem('f_eyesPath_Persistant', f_eyesPath);
      localStorage.setItem('f_mouthPath_Persistant', f_mouthPath);
      localStorage.setItem('f_nosePath_Persistant', f_nosePath);
      localStorage.setItem('f_backgroundPath_Persistant', f_backgroundPath);
   }

 


  const kaidaoButtonData = [
    {
    svgIcon: <><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg></>,
        title: 'Generate',
        handleClick: function(){
            generateFemale();
        }
    },
    {
    svgIcon: <><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg></>,
    title: 'Save',
    handleClick: function (){
      saveToDevice();
    }
    }
    
    ]

  const categoryButtonElement = <>
     <CategoryMenuButton title="ຜົມ" imgIconUrl={iconUrl.hair_icon} isCategoryActive={true} handleClick={()=>handleCategory("Is_Hair_Open")}/>
     <CategoryMenuButton title="ຄິ້ວ" imgIconUrl={iconUrl.eye_brow_icon} handleClick={()=>handleCategory("Is_EyeBrow_Open")}/>
     <CategoryMenuButton title="ຕາ" imgIconUrl={iconUrl.eyes_icon} handleClick={()=>handleCategory("Is_Eyes_Open")}/>
     <CategoryMenuButton title="ດັງ" imgIconUrl={iconUrl.nose_icon} handleClick={()=>handleCategory("Is_Nose_Open")}/>
     <CategoryMenuButton title="ປາກ" imgIconUrl={iconUrl.mouth_icon} handleClick={()=>handleCategory("Is_Mouth_Open")}/>
     <CategoryMenuButton title="ເສື້ອ" imgIconUrl={iconUrl.shirt_icon} handleClick={()=>handleCategory("Is_Shirt_Open")}/>
     <CategoryMenuButton title="ພື້ນຫຼັງ" imgIconUrl={iconUrl.background_icon} handleClick={()=>handleCategory("Is_Background_Open")}/>
  </>

  const hairElement = <>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_1} handleClick={()=>set_f_HairPath(hairUrl.hair_1)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_2} handleClick={()=>set_f_HairPath(hairUrl.hair_2)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_3} handleClick={()=>set_f_HairPath(hairUrl.hair_3)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_4} handleClick={()=>set_f_HairPath(hairUrl.hair_4)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_5} handleClick={()=>set_f_HairPath(hairUrl.hair_5)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_6} handleClick={()=>set_f_HairPath(hairUrl.hair_6)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_7} handleClick={()=>set_f_HairPath(hairUrl.hair_7)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_8} handleClick={()=>set_f_HairPath(hairUrl.hair_8)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_9} handleClick={()=>set_f_HairPath(hairUrl.hair_9)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_10} handleClick={()=>set_f_HairPath(hairUrl.hair_10)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_11} handleClick={()=>set_f_HairPath(hairUrl.hair_11)}/>
                        <ItemMenuButton imgIconUrl={hairUrl.hair_12} handleClick={()=>set_f_HairPath(hairUrl.hair_12)}/>
  </>

  const eyeBrowElement = <>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_1} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_1)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_2} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_2)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_3} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_3)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_4} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_4)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_5} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_5)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_6} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_6)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_7} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_7)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_8} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_8)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_9} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_9)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_10} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_10)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_11} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_11)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_12} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_12)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_13} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_13)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_14} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_14)}/>
                        <ItemMenuButton imgIconUrl={eye_browUrl.eye_brow_15} handleClick={()=>set_f_Eye_BrowPath(eye_browUrl.eye_brow_15)}/>
  </>

  const eyesElement = <>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_1} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_1)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_2} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_2)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_3} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_3)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_4} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_4)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_5} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_5)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_6} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_6)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_7} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_7)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_8} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_8)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_9} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_9)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_10} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_10)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_11} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_11)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_12} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_12)}/>
                        <ItemMenuButton imgIconUrl={eyesUrl.eyes_13} handleClick={()=>set_f_EyesPath(eyesUrl.eyes_13)}/>
  </>

  const noseElement = <>
                        <ItemMenuButton imgIconUrl={noseUrl.nose_1} handleClick={()=>set_f_NosePath(noseUrl.nose_1)}/>
                        <ItemMenuButton imgIconUrl={noseUrl.nose_2} handleClick={()=>set_f_NosePath(noseUrl.nose_2)}/>
                        <ItemMenuButton imgIconUrl={noseUrl.nose_3} handleClick={()=>set_f_NosePath(noseUrl.nose_3)}/>
                        <ItemMenuButton imgIconUrl={noseUrl.nose_4} handleClick={()=>set_f_NosePath(noseUrl.nose_4)}/>
  </>

  const mouthElement = <>
                        <ItemMenuButton imgIconUrl={mouthUrl.mouth_1} handleClick={()=>set_f_MouthPath(mouthUrl.mouth_1)}/>
                        <ItemMenuButton imgIconUrl={mouthUrl.mouth_2} handleClick={()=>set_f_MouthPath(mouthUrl.mouth_2)}/>
                        <ItemMenuButton imgIconUrl={mouthUrl.mouth_3} handleClick={()=>set_f_MouthPath(mouthUrl.mouth_3)}/>
                        <ItemMenuButton imgIconUrl={mouthUrl.mouth_4} handleClick={()=>set_f_MouthPath(mouthUrl.mouth_4)}/>
                        <ItemMenuButton imgIconUrl={mouthUrl.mouth_5} handleClick={()=>set_f_MouthPath(mouthUrl.mouth_5)}/>
  </>

  const shirtElement = <>
                        <ItemMenuButton imgIconUrl={shirtUrl.shirt_1} handleClick={()=>set_f_ShirtPath(shirtUrl.shirt_1)}/>
                        <ItemMenuButton imgIconUrl={shirtUrl.shirt_2} handleClick={()=>set_f_ShirtPath(shirtUrl.shirt_2)}/>
                        <ItemMenuButton imgIconUrl={shirtUrl.shirt_3} handleClick={()=>set_f_ShirtPath(shirtUrl.shirt_3)}/>
                        <ItemMenuButton imgIconUrl={shirtUrl.shirt_4} handleClick={()=>set_f_ShirtPath(shirtUrl.shirt_4)}/>
                        <ItemMenuButton imgIconUrl={shirtUrl.shirt_5} handleClick={()=>set_f_ShirtPath(shirtUrl.shirt_5)}/>
                        <ItemMenuButton imgIconUrl={shirtUrl.shirt_6} handleClick={()=>set_f_ShirtPath(shirtUrl.shirt_6)}/>
                        <ItemMenuButton imgIconUrl={shirtUrl.shirt_7} handleClick={()=>set_f_ShirtPath(shirtUrl.shirt_7)}/>
                        <ItemMenuButton imgIconUrl={shirtUrl.shirt_8} handleClick={()=>set_f_ShirtPath(shirtUrl.shirt_8)}/>
                        <ItemMenuButton imgIconUrl={shirtUrl.shirt_9} handleClick={()=>set_f_ShirtPath(shirtUrl.shirt_9)}/>
  </>

  const backgroundElement = <>
                        <ItemMenuButton imgIconUrl={backgroundUrl.background_1} handleClick={()=>set_f_BackgroundPath(backgroundUrl.background_1)}/>
                        <ItemMenuButton imgIconUrl={backgroundUrl.background_2} handleClick={()=>set_f_BackgroundPath(backgroundUrl.background_2)}/>
                        <ItemMenuButton imgIconUrl={backgroundUrl.background_3} handleClick={()=>set_f_BackgroundPath(backgroundUrl.background_3)}/>
  </>



  return (
    <div>
          <header className="flex justify-between pt-3 pb-2 px-4 text-black" >
            <div className="logo flex gap-2">
              <a href="/"><img src="./images/kaidao-logo-stroke-xl.png" alt="kaidao logo | kaidao icon" width={50}/></a>
              <a href="/" className="font-serif text-xl">kaidao studio</a>
            </div>
            <ul className="hidden lg:flex gap-4">
              <li><a href="#" className="font-serif">Our Team</a></li>
              <li><a href="#" className="font-serif">Social Media</a></li>
            </ul>

            <button className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            </button>
          </header>

          <main className="container mx-auto pt-3 md:px-36 md:pt-2">
           {/* //TODO  ------------------------- actions button ------------------------- */}
           <div className="flex gap-4 justify-between pb-3 lg:justify-end">
                    {
                      kaidaoButtonData.map((button, index)=>{
                        return (
                          <div key={index}>
                          <KaidaoButton svgIcon={button.svgIcon} title={button.title} handleClick={button.handleClick}/>
                          </div>
                        )
                      })
                    }

            </div>
              {/* tools and canvas */}
              <div className="flex flex-col lg:flex-row justify-center">
                  <div className="border-2 border-black  border-b-0 flex justify-center p-3 lg:border-r-0 lg:border-b-2">
                    <canvas ref={canvasRef} className="border-2 border-black" width={100} height={100}></canvas>
                  </div>
                 {/* tools and actions button container */}
                 <div className="border-2 border-black p-3 flex flex-col justify-start align-middle items-center grow  lg:w-2/6">
                   {/* tools */}
                   {/* category menu  button*/}
                   <div className="container border-l-2 border-black flex gap-1 p-1 mb-2 flex-nowrap overflow-y-auto">
                      {categoryButtonElement}
                   </div>
                   
                   {/* //NOTE menu button  */}
                    <div className="rounded-md h-44 min-h-full lg:min-h-0 lg:h-5/6 w-full bg-gray-200 ">
                    <div className="container p-2 flex flex-wrap flex-row gap-1  justify-start align-top items-start">
                      { is_Hair_Open && hairElement }
                      { is_EyeBrow_Open && eyeBrowElement }
                      { is_Eyes_Open && eyesElement}
                      { is_Nose_Open && noseElement }
                      { is_Mouth_Open && mouthElement }
                      { is_Shirt_Open && shirtElement }
                      { is_Background_Open && backgroundElement}
                    </div>
                    </div>
                   

                  

                 </div>
              </div>
           
          </main>

    </div>
  )
}

export default App
