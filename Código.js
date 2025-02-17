const doGet = () => 
    HtmlService.createTemplateFromFile('views/index.html')
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setFaviconUrl("https://image.flaticon.com/icons/png/512/953/953720.png");

const include = (ruta) => 
    HtmlService.createHtmlOutputFromFile(ruta).getContent();
