import React, { useState, useRef, useEffect } from "react"
import CategoryMenuButton from "./components/CategoryMenuButton";
import GithubButton from "./components/GithubButton";
import ItemMenuButton from "./components/ItemMenuButton";
import KaidaoButton from "./components/KaidaoButton";
import { BG_PREFIX, BG_TYPE, BODY_PREFIX, BODY_TYPE, EYES_PREFIX, EYES_TYPE, EYE_BROW_PREFIX, EYE_BROW_TYPE, HAIR_PREFIX, HAIR_TYPE, MOUTH_PREFIX, MOUTH_TYPE, NOSE_PREFIX, NOSE_TYPE, SHIRT_PREFIX, SHIRT_TYPE } from "./constants";
import { generateSequentialArray } from "./helper";
import { getFemaleImagePath } from "./helper/getImage";
import "./index.css"


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
  
  const backgroundCountArray = generateSequentialArray(3) 
  const bodyCountArray = generateSequentialArray(2) 
  const eyeBrowCountArray = generateSequentialArray(15) 
  const eyesCountArray = generateSequentialArray(13) 
  const hairCountArray = generateSequentialArray(12) 
  const mouthCountArray = generateSequentialArray(11) 
  const noseCountArray = generateSequentialArray(4) 
  const shirtCountArray = generateSequentialArray(9) 

  //NOTE total item count
  const f_hair__count = hairCountArray.length;
  const f_eye_brow__count = eyeBrowCountArray.length;
  const f_eyes__count = eyesCountArray.length;
  const f_nose__count = noseCountArray.length;
  const f_mouth__count = mouthCountArray.length;
  const f_shirt__count = shirtCountArray.length;
  const f_background__count = backgroundCountArray.length;
  

  const [currentCategory, setCurrentCategory] = useState("")

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
  const [f_hairPath, set_f_HairPath] = useState(f_hairPath_Persistant ? f_hairPath_Persistant : getFemaleImagePath(HAIR_TYPE, HAIR_PREFIX, 1))
  const [f_eye_browPath, set_f_Eye_BrowPath] = useState(f_eye_browPath_Persistant ? f_eye_browPath_Persistant : getFemaleImagePath(EYE_BROW_TYPE, EYE_BROW_PREFIX, 1))
  const [f_eyesPath, set_f_EyesPath] = useState(f_eyesPath_Persistant ? f_eyesPath_Persistant : getFemaleImagePath(EYES_TYPE, EYES_PREFIX, 1))
  const [f_nosePath, set_f_NosePath] = useState(f_nosePath_Persistant ? f_nosePath_Persistant : getFemaleImagePath(NOSE_TYPE, NOSE_PREFIX, 1))
  const [f_bodyPath, set_f_BodyPath] = useState(f_bodyPath_Persistant ? f_bodyPath_Persistant :  getFemaleImagePath(BODY_TYPE, BODY_PREFIX, 2))
  const [f_shirtPath, set_f_ShirtPath] = useState(f_shirtPath_Persistant ? f_shirtPath_Persistant : getFemaleImagePath(SHIRT_TYPE, SHIRT_PREFIX, 1))
  const [f_mouthPath, set_f_MouthPath] = useState(f_mouthPath_Persistant ? f_mouthPath_Persistant : getFemaleImagePath(MOUTH_TYPE, MOUTH_PREFIX, 1))
  const [f_backgroundPath, set_f_BackgroundPath] = useState(getFemaleImagePath(BG_TYPE, BG_PREFIX, 1))

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



  useEffect(()=>{
    handleCategory(currentCategory)
  },[currentCategory])

 
  function handleCategory(isItem){
      setIs_Hair_Open(false)
      setIs_EyeBrow_Open(false);
      setIs_Eyes_Open(false);
      setIs_Nose_Open(false);
      setIs_Mouth_Open(false);
      setIs_Shirt_Open(false);
      setIs_Background_Open(false);

      switch(isItem){
        case "Is_Hair_Open":
          setIs_Hair_Open(true);
          break;
        case "Is_EyeBrow_Open":
          setIs_EyeBrow_Open(true);
          break;
        case "Is_Eyes_Open":
          setIs_Eyes_Open(true);
          break;
        case "Is_Nose_Open":
          setIs_Nose_Open(true);
          break;
        case "Is_Mouth_Open":
          setIs_Mouth_Open(true);
          break;
        case "Is_Shirt_Open":
          setIs_Shirt_Open(true);
          break;
        case "Is_Background_Open":
          setIs_Background_Open(true);
          break;
        default:
          setIs_Hair_Open(true);
      }
  }

 

  useEffect(()=>{
    renderImage();
    savePersistant();
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

    set_f_HairPath(getFemaleImagePath(HAIR_TYPE, HAIR_PREFIX, hair_rdn))
    set_f_ShirtPath(getFemaleImagePath(SHIRT_TYPE, SHIRT_PREFIX, shirt_rdn))
    set_f_EyesPath(getFemaleImagePath(EYES_TYPE, EYES_PREFIX, eyes_rdn))
    set_f_MouthPath(getFemaleImagePath(MOUTH_TYPE, MOUTH_PREFIX, mouth_rdn))
    set_f_NosePath(getFemaleImagePath(NOSE_TYPE, NOSE_PREFIX, nose_rdn))
    set_f_Eye_BrowPath(getFemaleImagePath(EYE_BROW_TYPE, EYE_BROW_PREFIX, eye_brow_rdn))
    // set_f_BackgroundPath("/images/female/background/bg ("+background_rdn+").png")
    set_f_BackgroundPath(getFemaleImagePath(BG_TYPE, BG_PREFIX, 1))
    set_f_BodyPath(getFemaleImagePath(BODY_TYPE, BODY_PREFIX, 2))


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
        if(f_hairPath == getFemaleImagePath(HAIR_TYPE, HAIR_PREFIX, 4)){
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
        if(f_hairPath == getFemaleImagePath(HAIR_TYPE, HAIR_PREFIX, 4)){
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
    svgIcon: <><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg></>,
        title: 'ສຸ່ມອັດຕະໂນມັດ',
        handleClick: function(){
            generateFemale();
        }
    },
    {
    svgIcon: <><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg></>,
    title: 'ບັນທຶກ',
    handleClick: function (){
      saveToDevice();
    }
    }
    
    ]



  const hairElement = <>
                {
                  hairCountArray.map((orderNum, index)=>(
                    <React.Fragment key={index}>
                          <ItemMenuButton imgIconUrl={getFemaleImagePath(HAIR_TYPE, HAIR_PREFIX, orderNum)} handleClick={()=>set_f_HairPath(getFemaleImagePath(HAIR_TYPE, HAIR_PREFIX, orderNum))}/>
                      </React.Fragment>
                  ))
                }
          </>

  const eyeBrowElement = <>
                    {
                    eyeBrowCountArray.map((orderNum, index)=>(
                      <React.Fragment key={index}>
                            <ItemMenuButton imgIconUrl={getFemaleImagePath(EYE_BROW_TYPE, EYE_BROW_PREFIX, orderNum)} handleClick={()=>set_f_Eye_BrowPath(getFemaleImagePath(EYE_BROW_TYPE, EYE_BROW_PREFIX, orderNum))}/>
                        </React.Fragment>
                    ))
                  }
  </>

  const eyesElement = <>
                     {
                    eyesCountArray.map((orderNum, index)=>(
                      <React.Fragment key={index}>
                            <ItemMenuButton imgIconUrl={getFemaleImagePath(EYES_TYPE, EYES_PREFIX, orderNum)} handleClick={()=>set_f_EyesPath(getFemaleImagePath(EYES_TYPE, EYES_PREFIX, orderNum))}/>
                        </React.Fragment>
                    ))
                  }
  </>

  const noseElement = <>
                       {
                      noseCountArray.map((orderNum, index)=>(
                        <React.Fragment key={index}>
                              <ItemMenuButton imgIconUrl={getFemaleImagePath(NOSE_TYPE, NOSE_PREFIX, orderNum)} handleClick={()=>set_f_NosePath(getFemaleImagePath(NOSE_TYPE, NOSE_PREFIX, orderNum))}/>
                          </React.Fragment>
                      ))
                  }
  </>

  const mouthElement = <>
                       {
                      mouthCountArray.map((orderNum, index)=>(
                        <React.Fragment key={index}>
                              <ItemMenuButton imgIconUrl={getFemaleImagePath(MOUTH_TYPE, MOUTH_PREFIX, orderNum)} handleClick={()=>set_f_MouthPath(getFemaleImagePath(MOUTH_TYPE, MOUTH_PREFIX, orderNum))}/>
                          </React.Fragment>
                      ))
                  }
  </>

  const shirtElement = <>
                       {
                            shirtCountArray.map((orderNum, index)=>(
                          <React.Fragment key={index}>
                                <ItemMenuButton imgIconUrl={getFemaleImagePath(SHIRT_TYPE, SHIRT_PREFIX, orderNum)} handleClick={()=>set_f_ShirtPath(getFemaleImagePath(SHIRT_TYPE, SHIRT_PREFIX, orderNum))}/>
                            </React.Fragment>
                        ))
                    }   
  </>

  const backgroundElement = <>
                                               {
                            backgroundCountArray.map((orderNum, index)=>(
                            <React.Fragment key={index}>
                                  <ItemMenuButton imgIconUrl={getFemaleImagePath(BG_TYPE, BG_PREFIX, orderNum)} handleClick={()=>set_f_BackgroundPath(getFemaleImagePath(BG_TYPE, BG_PREFIX, orderNum))}/>
                              </React.Fragment>
                          ))
                        }
  </>



  return (
    <div>
          <header className="flex justify-between px-4 pt-3 pb-2 text-black" >
            <div className="flex gap-2 logo">
              <a href="/"><img src="./images/kaidao-logo-stroke-xl.png" alt="kaidao logo | kaidao icon" width={50}/></a>
              <a href="/" className="font-serif text-xl">kaidao studio</a>
            </div>
            
            <div className="flex">
                <GithubButton/>
                <ul className="hidden gap-4 lg:flex">
                  <li><a href="#" className="font-sans font-bold">ທີມງານ</a></li>
                  <li><a href="#" className="font-sans font-bold">ຕິດຕາມ</a></li>
                </ul>

                <button className="lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                </button>
            </div>
          </header>

          <main className="container pt-3 mx-auto md:px-36 md:pt-2">
           {/* //TODO  ------------------------- actions button ------------------------- */}
           <div className="flex justify-between gap-4 pb-3 lg:justify-end">
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
              <div className="flex flex-col justify-center lg:flex-row">
                  <div className="flex justify-center p-3 border-2 border-b-0 border-black lg:border-r-0 lg:border-b-2">
                    <canvas ref={canvasRef} className="border-2 border-black" width={100} height={100}></canvas>
                  </div>
                 {/* tools and actions button container */}
                 <div className="flex flex-col items-center justify-start p-3 align-middle border-2 border-black grow lg:w-2/6">
                   {/* tools */}
                   {/* category menu  button*/}
                   <div className="container flex gap-1 p-1 mb-2 overflow-y-auto border-l-2 border-black flex-nowrap">
                    <CategoryMenuButton title="Is_Hair_Open" currentCategory={currentCategory} imgIconUrl={iconUrl.hair_icon} isCategoryActive={true} handleClick={()=>setCurrentCategory("Is_Hair_Open")}/>
                    <CategoryMenuButton title="Is_EyeBrow_Open" currentCategory={currentCategory} imgIconUrl={iconUrl.eye_brow_icon} handleClick={()=>setCurrentCategory("Is_EyeBrow_Open")}/>
                    <CategoryMenuButton title="Is_Eyes_Open" currentCategory={currentCategory} imgIconUrl={iconUrl.eyes_icon} handleClick={()=>setCurrentCategory("Is_Eyes_Open")}/>
                    <CategoryMenuButton title="Is_Nose_Open" currentCategory={currentCategory} imgIconUrl={iconUrl.nose_icon} handleClick={()=>setCurrentCategory("Is_Nose_Open")}/>
                    <CategoryMenuButton title="Is_Mouth_Open" currentCategory={currentCategory} imgIconUrl={iconUrl.mouth_icon} handleClick={()=>setCurrentCategory("Is_Mouth_Open")}/>
                    <CategoryMenuButton title="Is_Shirt_Open" currentCategory={currentCategory} imgIconUrl={iconUrl.shirt_icon} handleClick={()=>setCurrentCategory("Is_Shirt_Open")}/>
                    <CategoryMenuButton title="Is_Background_Open" currentCategory={currentCategory} imgIconUrl={iconUrl.background_icon} handleClick={()=>setCurrentCategory("Is_Background_Open")}/>
                   </div>
                   
                   {/* //NOTE menu button  */}
                    <div className="w-full min-h-full bg-gray-200 rounded-md h-44 lg:min-h-0 lg:h-5/6 ">
                    <div className="container flex flex-row flex-wrap items-start justify-start gap-1 p-2 align-top">
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
