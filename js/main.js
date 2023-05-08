//handel active state
const links = document.querySelectorAll(".nav-link");

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}

// let landing = document.querySelectorAll('.landingg');
// let navLinks = document.querySelectorAll("nav a");
// window.onscroll = () => {
//   landing.forEach(lan => {
//     let top = window.scrollY;
//     let offset = lan.offsetTop - 150;
//     let height = lan.offsetHeight;
//     let id = lan.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach( links => {
//         links.classList.remove("active");
//         document.querySelector(`nav a[href*=${id}`)
//           .classList.add("active");
//       });
//     };
//   });
// };
//responsive navbar

// creat popup with the image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");

    overlay.className = "popup-overlay";

    document.body.appendChild(overlay);

    let popupBox = document.createElement("div");

    popupBox.className = "popup-Box";

    let popupImage = document.createElement("img");

    popupImage.src = img.src;

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);

    // create the close span
    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("x");

    closeButton.appendChild(closeButtonText);

    closeButton.className = "close-button";

    popupBox.appendChild(closeButton);

    //close popup
    document.addEventListener("click", function (e) {
      if (e.target.className == "close-button") {
        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
      }
    });
  });
});

function AR() {
  lang.textContent = "ع";

  main.getElementsByTagName("a")[0].textContent = "الصفحة الرئيسيه";
  main.getElementsByTagName("a")[1].textContent = "من نحن ";
  main.getElementsByTagName("a")[2].textContent = "منتجاتنا";
  main.getElementsByTagName("a")[3].textContent = "الاكثر استخداما";
  main.getElementsByTagName("a")[4].textContent = "تواصل معنا";

  //############ home

  home.getElementsByTagName("h1")[0].textContent =
    "الشركةالأفضل في مجال مكافحة الآفات والحشرات";
  home.getElementsByTagName("p")[0].textContent =
    "تفعل هذا بكل سهولة و احترافية";
  home.getElementsByTagName("a")[0].textContent = "إتصل الآن | 0201062222802 ";

  //############ about

  about.getElementsByTagName("h2")[0].textContent = "من نحن ...؟";

  about.getElementsByTagName("p")[0].textContent = "العنود كنترول";
  about.getElementsByTagName("p")[1].textContent =
    "شركة العنود هي شركة تختص بتوفير خدمات متخصصة للتحكم في الافات والحشرات في المنازل و الفنادق و المباني التجارية والصناعيه . وتهدف إلي الحفاظ علي الصحة العامة والحماية من الاضرار التي يمكن ان تسببها الأفات و الاحشرات للافراد والممتلكات . وتقدم شركة العنود مجموعة  متنوعة من الخجمات التي تشمل إزالة الحشرات الضارة مثل الصراصير و النمل والفئران والبعوض والبق والقضاء عليها بإستخدام المبيدات الحشرية والطرق الحديثة الاخري . وتستخدم الشركة أيضاً تقنيات مبتكرة وفعالة لمنع عودة الحشرات . وتطبيق إجراءات الوقايه والتحكم في الاقات في المنطقة المعنية .";
  about.getElementsByTagName("p")[2].textContent =
    "لدى شركة العنود فريق متخصص من المهندسين والاستشاريين والعاملين الذين يتمتعون بالخبرة والمهارة في تقديم الخدمات المختلفة والحفاظ على سلامة العملاء والموظفين والبيئة. ويتمثل دورهم في تحديد وتقييم المشكلات المتعلقة بالحشرات وتحديد الحلول الفعالة والآمنة لإزالتها والوقاية من عودتها. وتشمل خدمات الشركة ايضا تقديم الاستشارات المجانية والتقييم الأولي للمشكلة وتوفير خطط مخصصة لكل حالة تتناسب مع احتياجات العملاء وتوفير خدمات ما بعد البيع والدعم الفني لضمان رضا العملاء ونجاح الحلول المتبعة تقديم النصائح والإرشادات لتجنب ومنع تكاثر الحشرات والآفات في المستقبل .";
  about.getElementsByTagName("p")[3].textContent =
    "تحرص شركة العنود على استخدام المنتجات الآمنة والصديقة للبيئة والتي لا تؤثر سلباً على صحة الإنسان أو الحيوانات الأليفة. وتضمن الشركة الامتثال للمعايير الصحية والبيئية المتعلقة بتخزين وتطبيق المبيدات الحشرية. وتتميز الشركة بتوفير خدماتها بأسعار معقولة وتنافسية وفي بعض الأحيان توفر خطط مدفوعة بالاشتراك للعملاء الذين يحتاجون إلى خدمات مستمرة للتحكم في الحشرات. ايضا استخدام أحدث الطرق للقضاء على الآفات والحشرات وفي النهاية، تتمثل أهمية الشركة في الحفاظ على صحة الإنسان والبيئة والممتلكات، وتحسين جودة الحياة في المجتمعات التي تخدمها الشركة .";

  about.getElementsByTagName("h3")[0].textContent = "نبذة عن الشركة";
  about.getElementsByTagName("h3")[1].textContent = "فريق العمل";
  about.getElementsByTagName("h3")[2].textContent = "يميز الشركة";

  //############ Products

  products.getElementsByTagName("h2")[0].textContent = "منتجاتنا";

  products.getElementsByTagName("p")[0].textContent = "الافضل محليا وعالميا";
  products.getElementsByTagName("p")[1].textContent = "Sulfur powder";
  products.getElementsByTagName("p")[2].textContent = "ديزو هاي 60 % EC";
  products.getElementsByTagName("p")[3].textContent = "أسيتاإكس 20 % SP";
  products.getElementsByTagName("p")[4].textContent = "كلو هاي 48 % EC";
  products.getElementsByTagName("p")[5].textContent = "داي آب 90 % SP";
  products.getElementsByTagName("p")[6].textContent = "دودي 25 % WG";
  products.getElementsByTagName("p")[7].textContent = "5.7 % WG";
  products.getElementsByTagName("p")[8].textContent = "بوكسر 800 EC 5L";

  //############ products2
  // document.getElementById("ghazal").setAttribute("data-product", "hala");

  products
    .getElementsByTagName("div")[5]
    .setAttribute("data-product", "للحديقة، لحماية النباتات من الأمراض.");
  products
    .getElementsByTagName("div")[7]
    .setAttribute(
      "data-product",
      "مبيد حشري يعمل بالملامسة و هو عبارة عن سم معدي يستخدم لمكافحة مجموعة واسعة من الحشرات بمعدل 100 سم 3 / 100 لتر ماء."
    );
  products
    .getElementsByTagName("div")[9]
    .setAttribute(
      "data-product",
      "مبيد حشري جهازي فعال فى القضاء علي الحشرات الضارة بالزراعة يستخدم بمعدل 25 جرام / 100 لتر ماء."
    );
  products
    .getElementsByTagName("div")[11]
    .setAttribute(
      "data-product",
      "مبيد حشري مركز سريع التأثير يستخدم فى مكافحة مجموعة واسعة من الآفات الحشرية بمعدل 100 سم / 10 لتر ماء."
    );
  products
    .getElementsByTagName("div")[13]
    .setAttribute(
      "data-product",
      "مستحضر فى صورة مسحوق قابل للذوبان وهو مبيد حشري جهازي يعمل علي القضاء علي كافة الحشرات الزراعية."
    );
  products
    .getElementsByTagName("div")[15]
    .setAttribute(
      "data-product",
      "مركب سريع المفعول يقضي علي الحشرات الثاقبة  ومجهز فى صورة حبيبات قابلة للإنتشار فى الماء بمعدل 20 جرام / 100 لتر ماء."
    );
  products
    .getElementsByTagName("div")[17]
    .setAttribute("data-product", "مبيد حشري لمكافحة معظم الآفات والحشرات.");
  products
    .getElementsByTagName("div")[19]
    .setAttribute(
      "data-product",
      "مبيد عشبي بتركيبة تركيزية لإعداد مستحلب مائي، يتم استخدامه على التربة والأوراق، ويهدف إلى التحكم الانتقائي في بعض النباتات الأحادية الفلقية السنوية."
    );

  //############ mostUsed

  mostUsed.getElementsByTagName("h2")[0].textContent = "منتجاتنا";

  mostUsed.getElementsByTagName("p")[0].textContent = "الاكثر إستخداماً";

  //############ mostUsed2

  mostUsed
    .getElementsByTagName("div")[5]
    .setAttribute(
      "data-product",
      "يسمح بمحاربة العفن الرمادي، مرض البقعة السوداء والصدأ."
    );
  mostUsed
    .getElementsByTagName("div")[7]
    .setAttribute(
      "data-product",
      "سهل الاستخدام ويتكيف مع أي محصول، انتشر المادة الفعالة غليفوسات بسرعة في جميع قارات العالم لتصبح أكثر المبيدات الحشائش استخدامًا في الوقت الحاضر."
    );
  mostUsed
    .getElementsByTagName("div")[9]
    .setAttribute(
      "data-product",
      "منتج مبني على عوامل مضادة للفطريات قوية. بمجرد رشه أو تطبيقه على الرواسب الخضراء أو العفن، لا يترك أي آثار أو طبقة على المواد ولا يغير مظهرها أو لونها."
    );
  mostUsed
    .getElementsByTagName("div")[11]
    .setAttribute(
      "data-product",
      "يتم استخدام البخاخ الآلي لجميع الحشرات على نحو محدد، داخل المباني، لتأثيره العلاجي وعمله الفوري. يتيح هذا البخاخ في حركة واحدة علاجًا صدميًا في الأماكن المصابة بالحشرات (20 إلى 40 متر مربع، أو 50 إلى 100 متر مكعب في قطعة واحدة). ويدمر كل من الحشرات الزاحفة والطائرة."
    );
  mostUsed
    .getElementsByTagName("div")[13]
    .setAttribute(
      "data-product",
      "منتج للقضاء على الحشرات الزاحفة في المنزل. سهل الاستخدام ويوفر حماية فورية ضد النمل والعناكب والصراصير وغيرها من الحشرات الزاحفة. يتوفر بحجم 400 مل وهو مصمم لتوفير حماية دائمة ضد الحشرات."
    );
  mostUsed
    .getElementsByTagName("div")[15]
    .setAttribute(
      "data-product",
      "مبيد حشري قوي جداً. يعطي المادة الفعالة إيميبروثرين تأثير صدمة استثنائي على الحشرات (تسقط الحشرات في غضون ثوانٍ معدودة)، ويسمح سايبرميثرين بحماية الأسطح المعالجة لعدة أسابيع."
    );
  mostUsed
    .getElementsByTagName("div")[17]
    .setAttribute(
      "data-product",
      "مبيد حشرى للمعالجة السطحية محلول مبيد حشري جاهز للاستخدام لمعالجة الأسطح ضد الحشرات الطائرة مثل الذباب والبعوض والعث وايضا الحشرات الزاحفة مثل النمل والصراصير والبراغيث."
    );
  mostUsed
    .getElementsByTagName("div")[19]
    .setAttribute(
      "data-product",
      "يصد فورًا جميع أنواع القوارض (الجرذان والسناجب والفئران والنواقل وما إلى ذلك) ويمنع تدهور الأجزاء المصنوعة من المطاط والبلاستيك (التنجيد والكابلات والخراطيم والمغمد وما إلى ذلك...) ولا يفتح الألوان على المطاط."
    );
  mostUsed
    .getElementsByTagName("div")[21]
    .setAttribute(
      "data-product",
      "البخاخ الذي يعمل بفعالية ضد البعوض والبعوض النمر والذباب بفضل تركيبته الحصرية، ويحميك من البعوض المحتملة التي تحمل فيروسات الشيكونغونيا والدينغي وزيكا. تأثيره طويل الأمد يمنع عودة الحشرات في الغرف المعالجة وبالتالي يحمي منزلك لفترة طويلة."
    );
  mostUsed
    .getElementsByTagName("div")[23]
    .setAttribute(
      "data-product",
      "أحد المنتجات المسموح بها في الزراعة العضوية. وهي فعالة بشكل خاص ضد الحشرات مثل القطنيات."
    );
  //############ section

  sections.getElementsByTagName("div")[0].textContent =
    "تسعى شركة العنود إلى تطوير منتجات آمنة وفعالة لاستخدامها في مختلف المجالات، مثل الزراعة والحدائق والمنازل والمستودعات والمصانع والفنادق. كما تقوم بتقديم الخدمات المتعلقة بتحليل البيئة وتقييم المخاطر والتدريب والإشراف والصيانة. ومن المهم التأكد من اتباع تسعى شركة العنود إلى تطوير منتجات آمنة وفعالة لاستخدامها في مختلف المجالات، مثل الزراعة والحدائق والمنازل والمستودعات والمصانع والفنادق. كما تقوم بتقديم الخدمات المتعلقة بتحليل البيئة وتقييم المخاطر والتدريب والإشراف والصيانة. ومن المهم التأكد من اتباع .";

  sections.getElementsByTagName("h4")[0].textContent = "147";
  sections.getElementsByTagName("h4")[1].textContent = "342";
  sections.getElementsByTagName("h4")[2].textContent = "100";
  sections.getElementsByTagName("h4")[3].textContent = "129";

  sections.getElementsByTagName("p")[0].textContent = "#اوتيل";
  sections.getElementsByTagName("p")[1].textContent = "#عميل";
  sections.getElementsByTagName("p")[2].textContent = "#حديقة";
  sections.getElementsByTagName("p")[3].textContent = "#منزل";

  //############ most

  most.getElementsByTagName("h2")[0].textContent = "بعض الأجهزة";
  most.getElementsByTagName("p")[7].textContent = "مصيدة ذباب";

  //############ footer

  contact.getElementsByTagName("h4")[0].textContent = "مقر الشركة";
  contact.getElementsByTagName("h4")[1].textContent = "من نحن ...؟";
  contact.getElementsByTagName("h4")[2].textContent = "تواصل معنا";

  contact.getElementsByTagName("a")[0].textContent = "عنوان مصر";
  contact.getElementsByTagName("a")[2].textContent = "نبذة عن الشركة";
  contact.getElementsByTagName("a")[3].textContent = "منتجاتنا";
}

function EN() {
  lang.textContent = "En";

  main.getElementsByTagName("a")[0].textContent = "Home";
  main.getElementsByTagName("a")[1].textContent = "About";
  main.getElementsByTagName("a")[2].textContent = "Products";
  main.getElementsByTagName("a")[3].textContent = "Most";
  main.getElementsByTagName("a")[4].textContent = "Contact";

  //############ home

  home.getElementsByTagName("h1")[0].textContent =
    "The best company in the field of pest and insect control";
  home.getElementsByTagName("p")[0].textContent =
    "We do it with ease and professionalism";
  home.getElementsByTagName("a")[0].textContent = "0201062222802 | call us now";

  //############ about

  about.getElementsByTagName("h2")[0].textContent = "?...About";

  about.getElementsByTagName("p")[0].textContent = "Elanod Control";
  about.getElementsByTagName("p")[1].textContent =
    "Al-Anoud Company specializes in providing specialized services for controlling pests and insects in homes, hotels, commercial and industrial buildings. It aims to maintain public health and protect individuals and properties from the damages that pests and insects can cause. Al-Anoud Company offers a variety of services, including removing harmful insects such as cockroaches, ants, rats, mosquitoes, bed bugs, and eliminating them using insecticides and other modern methods. The company also uses innovative and effective techniques to prevent the return of pests and applies prevention and control measures in the affected area";
  about.getElementsByTagName("p")[2].textContent =
    "At Al-Anoud Company, there is a specialized team of engineers, consultants, and workers who have experience and skill in providing various services while maintaining the safety of customers, employees, and the environment. Their role is to identify and evaluate pest-related problems, determine effective and safe solutions for their removal and prevention of their return. The company's services also include providing free consultations, initial assessment of the problem, providing customized plans for each case that meet the customers' needs, and providing after-sales services and technical support to ensure customer satisfaction and the success of the solutions adopted";
  about.getElementsByTagName("p")[3].textContent =
    "Al-Anoud company is committed to using safe and environmentally friendly products that do not negatively affect the health of humans or pets. The company ensures compliance with health and environmental standards related to the storage and application of insecticides. The company is distinguished by providing its services at reasonable and competitive prices, and sometimes offers subscription-based plans for customers who need continuous pest control services. Additionally, the company uses the latest methods to eliminate pests and insects. In the end, the importance of the company lies in preserving human health, the environment, and properties, and improving the quality of life in the communities it serves";

  about.getElementsByTagName("h3")[0].textContent = "Company profile";
  about.getElementsByTagName("h3")[1].textContent = "work team";
  about.getElementsByTagName("h3")[2].textContent = "characterizes the company";

  //############ products

  products.getElementsByTagName("h2")[0].textContent = "Our products";

  products.getElementsByTagName("p")[0].textContent =
    "The best locally and globally";
  products.getElementsByTagName("p")[1].textContent = "Sulfur powder";
  products.getElementsByTagName("p")[2].textContent = " DIZOHAI 60 % EC";
  products.getElementsByTagName("p")[3].textContent = "ACETA X 20 % SP";
  products.getElementsByTagName("p")[4].textContent = " COCL HAi 48% EC";
  products.getElementsByTagName("p")[5].textContent = "DiUP 90 % SP";
  products.getElementsByTagName("p")[6].textContent = "Dodi 25 % WG";
  products.getElementsByTagName("p")[7].textContent = "EVOCT 5.7 % WG";
  products.getElementsByTagName("p")[8].textContent = "BoxEr 800 EC 5L";
  ///#######

  // document.getElementById("ghazal").setAttribute("data-product", "hala");
  products
    .getElementsByTagName("div")[5]
    .setAttribute(
      "data-product",
      "For the garden, to protect plants from diseases"
    );
  products
    .getElementsByTagName("div")[7]
    .setAttribute(
      "data-product",
      "An insecticide that works by contact and is a systemic poison used to control a wide range of insects at a rate of 100 cm3/100 liters of water to protect plants from diseases"
    );
  products
    .getElementsByTagName("div")[9]
    .setAttribute(
      "data-product",
      "An effective systemic insecticide for controlling harmful insects in agriculture, used at a rate of 25 grams per 100 liters of water"
    );
  products
    .getElementsByTagName("div")[11]
    .setAttribute(
      "data-product",
      "A fast-acting concentrated insecticide used to control a wide range of insect pests at a rate of 100 cm/10 liters of water"
    );
  products
    .getElementsByTagName("div")[13]
    .setAttribute(
      "data-product",
      "A water-soluble powder formulation of an insecticide that is effective in eliminating all agricultural insects"
    );
  products
    .getElementsByTagName("div")[15]
    .setAttribute(
      "data-product",
      "A fast-acting compound that kills piercing insects and is prepared in the form of dispersible granules in water at a rate of 20 grams per 100 liters of water"
    );
  products
    .getElementsByTagName("div")[17]
    .setAttribute(
      "data-product",
      "A pesticide to control most pests and insects"
    );
  products
    .getElementsByTagName("div")[19]
    .setAttribute(
      "data-product",
      "A herbicide with a concentrated formulation for preparing an aqueous emulsion, used on soil and leaves, and aimed at selective control of some annual monocot plants"
    );

  //############ products2

  mostUsed.getElementsByTagName("h2")[0].textContent = "Our products";

  mostUsed.getElementsByTagName("p")[0].textContent = "Most Used";

  //############ mostUsed2

  mostUsed
    .getElementsByTagName("div")[5]
    .setAttribute(
      "data-product",
      "Sulfur spray allows to fight against powdery mildew, black spot disease and scab on fruits, vegetables and roses.Its use is simple and easily diluted in water, thanks to its micro-granules formulation.Its double action (contact and steam) brings an optimal protection, both preventive and curative"
    );
  mostUsed
    .getElementsByTagName("div")[7]
    .setAttribute(
      "data-product",
      "Glyphosate has been manufactured by Monsanto since 1974 and marketed under the name of Roundup. Economical, easy to use and adaptable to any crop, glyphosate quickly spread to all continents to become the most widely used herbicide today"
    );
  mostUsed
    .getElementsByTagName("div")[9]
    .setAttribute(
      "data-product",
      "More concentrated than micronized sulfur, this fungicide is used for a 'shock' action against molds and fungi in viticulture. It can present risks of skin irritation for the user"
    );
  mostUsed
    .getElementsByTagName("div")[11]
    .setAttribute(
      "data-product",
      "The automatic aerosol for all insects is used punctually, indoors, for its curative effect and its immediate action. It allows in a single gesture a shock treatment in infested premises (20 to 40m2, or 50 to 100m3 in one piece). It destroys both crawling and flying insects. When purchasing this product in a store, an identity check could be carried out, in accordance with the regulations in force"
    );
  mostUsed
    .getElementsByTagName("div")[13]
    .setAttribute(
      "data-product",
      "is the ideal product to eliminate crawling insects from your home. It is easy to use and offers immediate protection against ants, spiders, roaches and other crawling insects. It is available in 400ml and is designed to provide long lasting protection against insects. It is easy to apply and offers reliable protection against crawling insects"
    );
  mostUsed
    .getElementsByTagName("div")[15]
    .setAttribute(
      "data-product",
      "Excellium shock lacquer for cockroaches and bedbugs is a very powerful insecticide. The imiprothrin gives the product an exceptional shock action (the insects fall in a few seconds), and the cypermethrin allows the treated surfaces to be protected for several weeks....Excellium lacquer shock is active against crawling insects such as cockroaches, ants, fleas, bugs"
    );
  mostUsed
    .getElementsByTagName("div")[17]
    .setAttribute(
      "data-product",
      "Insecticide for surface treatment...Ready-to-use insecticide solution to treat surfaces against flying insects (flies, mosquitoes, moths...) and crawling insects (ants, bugs, fleas, cockroaches...)...Racan Insect Barrier:: Has a killing effect due to the rapid diffusion of the product in the body of the insect. By its formulation containing CYPERMETHRIN and its aqueous phase"
    );
  mostUsed
    .getElementsByTagName("div")[19]
    .setAttribute(
      "data-product",
      "Instantly repels all types of rodents (rats, squirrels, mice, martens etc...). Prevents deterioration by nibbling of rubber and plastic parts (upholstery, cables, hoses, sheaths etc...) Does not bleach rubber"
    );
  mostUsed
    .getElementsByTagName("div")[21]
    .setAttribute(
      "data-product",
      "aerosol acts effectively* against mosquitoes, tiger mosquitoes and flies thanks to its exclusive formula and protects you* from potential mosquitoes carrying the Chikungunya Dengue and Zika viruses. Its long-lasting action prevents the return of insects in the treated rooms and thus protects your home for a long time"
    );
  mostUsed
    .getElementsByTagName("div")[23]
    .setAttribute(
      "data-product",
      "Vaseline oil, derived from petroleum refining, is an insecticide used against insect eggs. Accepted in organic agriculture, it is applied to trees and shrubs in winter...Vaseline oil, like kerosene oil (also called white oil), is a mineral oil derived from petroleum refining"
    );

  sections.getElementsByTagName("div")[0].textContent =
    "Al-Anoud Company aims to develop safe and effective products for use in various fields, such as agriculture, gardens, homes, warehouses, factories, and hotels. They also provide services related to environmental analysis, risk assessment, training, supervision, and maintenance. It is important to ensure that the necessary instructions for using insecticide products are followed correctly and safely, as their improper use can be harmful to plants, animals, and humans, including people with allergies, children, and pets";

  sections.getElementsByTagName("h4")[0].textContent = "147";
  sections.getElementsByTagName("h4")[1].textContent = "342";
  sections.getElementsByTagName("h4")[2].textContent = "100";
  sections.getElementsByTagName("h4")[3].textContent = "129";

  sections.getElementsByTagName("p")[0].textContent = "#Hotel";
  sections.getElementsByTagName("p")[1].textContent = "#Client";
  sections.getElementsByTagName("p")[2].textContent = "#Garden";
  sections.getElementsByTagName("p")[3].textContent = "#House";

  //############ most

  most.getElementsByTagName("h2")[0].textContent = "Some Devices";
  most.getElementsByTagName("p")[7].textContent = "Fly Trap";

  //############ footer

  contact.getElementsByTagName("h4")[0].textContent = "Company Headquarters";
  contact.getElementsByTagName("h4")[1].textContent = "?...who are we";
  contact.getElementsByTagName("h4")[2].textContent = "Connect with us";

  contact.getElementsByTagName("a")[0].textContent =
    "Hurghada,El Kawther,Metro Street";
  contact.getElementsByTagName("a")[2].textContent = "About the company";
  contact.getElementsByTagName("a")[3].textContent = "Our products";
}

// step 9

document.getElementById("btnAr").onclick = function () {
  AR();

  document.getElementById("btnAr").style.display = "none";
  document.getElementById("btnEn").style.display = "";
};

// step 10

document.getElementById("btnEn").onclick = function () {
  EN();

  document.getElementById("btnAr").style.display = "";
  document.getElementById("btnEn").style.display = "none";
};
// step 11

// window.onload = function () {
//     document.getElementById("btnEn").style.display = "none";
// }
