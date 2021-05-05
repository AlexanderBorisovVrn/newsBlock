const news = [
  {
    id: 1,
    title: 'Neque porro quisquam est qui dolorem',
    img:'https://images.unsplash.com/photo-1616514169928-a1e40c6f791c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    prevTxt: "Aenean hendrerit posuere augue, nec efficitur dui cursus cursus. Nunc pellentesq" +
        "ue condimentum odio nec tempus.",
    txt: "Integer hendrerit scelerisque sem, non dictum ipsum tempor ac. Aliquam nec volut" +
        "pat risus. Sed dignissim iaculis metus, eget pulvinar sem. Nulla aliquet odio eu" +
        " mollis aliquet. Nam sed luctus arcu. Pellentesque tristique elit ligula, sollic" +
        "itudin tempor dui sagittis et. Maecenas nec mattis libero, ac lobortis velit. Qu" +
        "isque euismod, ex vel gravida porttitor, arcu ex pellentesque est, quis mattis l" +
        "orem turpis sed lorem.Phasellus ullamcorper at erat sit amet porttitor. Etiam ut" +
        " eleifend massa. Aenean hendrerit posuere augue, nec efficitur dui cursus cursus" +
        ". Nunc pellentesque condimentum odio nec tempus. Donec eget tellus id diam pelle" +
        "ntesque imperdiet. Suspendisse enim felis, blandit sed lacus a, rutrum euismod n" +
        "ulla. Praesent sed diam quis urna congue ultricies in sit amet orci. Nam eu enim" +
        " felis. Nam quis massa posuere sem tempor condimentum. Donec lorem felis, dapibu" +
        "s non pulvinar posuere, dapibus sed purus. Sed fermentum mi quis erat tincidunt," +
        " nec tempus velit lobortis. Nulla elementum lacus ac enim lacinia, accumsan bibe" +
        "ndum est vestibulum. Etiam justo orci, dapibus a felis vitae, pulvinar facilisis" +
        " ipsum."
  }, {
    id: 2,
    img:'https://images.unsplash.com/photo-1542490101-4be93d1756e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    title: "Class aptent taciti sociosqu ad litora torquent per conubia nostra",
    prevTxt: "Maecenas eget massa nec lacus venenatis sodales vel ac nisl. Nullam tincidunt at" +
        " justo et varius. Quisque nec posuere felis, at facilisis sapien. Aenean blandit" +
        " consectetur sem vitae mattis.",
    txt: "Donec vel scelerisque ex, at volutpat est. Nullam mattis, velit eget sodales dap" +
        "ibus, velit dui molestie nisi, ut dictum dolor erat quis risus. Donec a venenati" +
        "s nisi. Sed dignissim finibus lorem, non vestibulum sapien viverra at. Nam tinci" +
        "dunt sed tortor id congue. Nam placerat arcu eu magna vulputate consequat. Maece" +
        "nas eget massa nec lacus venenatis sodales vel ac nisl. Nullam tincidunt at just" +
        "o et varius. Quisque nec posuere felis, at facilisis sapien. Aenean blandit cons" +
        "ectetur sem vitae mattis."
  }, {
    id: 3,
    img:'https://images.unsplash.com/photo-1554728667-662368ae729a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    title: "Sed eget feugiat nulla. Sed ut erat eros.",
    prevTxt: "Duis tortor felis, fermentum ac accumsan a, blandit et elit. Suspendisse purus m" +
        "i, pellentesque eu aliquam ac.",
    txt: "Nulla massa ex, auctor eget mi eleifend, fermentum maximus dolor. Nam maximus er" +
        "os tempus libero placerat facilisis. Duis eu urna vel neque interdum euismod. Se" +
        "d pulvinar turpis a lacus tincidunt aliquam. Vestibulum ante ipsum primis in fau" +
        "cibus orci luctus et ultrices posuere cubilia curae; In at justo molestie dolor " +
        "rutrum vestibulum. Mauris mattis quis arcu fermentum bibendum. Fusce non mauris " +
        "dapibus, ultricies tortor ac, mattis quam. Aliquam arcu mauris, lobortis ac eros" +
        " at, tincidunt placerat orci. Donec feugiat neque dapibus facilisis luctus. Null" +
        "a sit amet dolor in elit lacinia hendrerit.Suspendisse nec commodo est, vitae va" +
        "rius leo. Nullam nunc tellus, feugiat eu eleifend non, gravida non est. Vivamus " +
        "molestie accumsan porttitor. In vel sem nec justo hendrerit sollicitudin. Fusce " +
        "lorem justo, ullamcorper eget rutrum non, placerat in neque. Etiam ultricies con" +
        "sectetur sapien sed malesuada. Praesent eget imperdiet nulla. Nam auctor molesti" +
        "e ligula. Integer facilisis risus nec urna commodo, et pulvinar nunc aliquam. Ve" +
        "stibulum euismod nibh sit amet ornare dapibus."
  }, {
    id: 4,
    img:'https://images.unsplash.com/photo-1567117632960-56e34a4c2456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    title: 'Phasellus sagittis dui a arcu dapibus, quis maximus ipsum efficitur. ',
    prevTxt: "Sed facilisis urna eget urna porta, in consectetur ipsum aliquet. Nam massa leo," +
        " blandit quis ligula sed, mattis ultrices orci. Maecenas eu dui eu sapien blandi" +
        "t blandit.",
    txt: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac tu" +
        "rpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices p" +
        "osuere cubilia curae; Suspendisse laoreet ornare nulla, non tempor justo aliquet" +
        " sed. Curabitur imperdiet at turpis in dapibus. Maecenas ultricies porttitor tor" +
        "tor at aliquet. Etiam feugiat mollis ante, at posuere ipsum porta ac. Morbi orci" +
        " nibh, convallis nec malesuada ut, tincidunt non ipsum.Nulla efficitur euismod d" +
        "ictum. Nulla id mi eu neque auctor placerat. Aenean id tortor aliquam nisi fauci" +
        "bus finibus. Nunc iaculis faucibus erat, dignissim porttitor tortor posuere id. " +
        "Morbi facilisis risus neque, id aliquet metus hendrerit quis. Nunc pharetra, ex " +
        "eu tristique eleifend, est neque luctus ligula, et egestas tortor ipsum id neque" +
        ". Integer ut iaculis tortor. Nunc at diam gravida, posuere ante vel, laoreet mag" +
        "na. Sed facilisis urna eget urna porta, in consectetur ipsum aliquet. Nam massa " +
        "leo, blandit quis ligula sed, mattis ultrices orci. Maecenas eu dui eu sapien bl" +
        "andit blandit. Sed nisi eros, cursus at posuere vel, tempus eget dolor. Vestibul" +
        "um a augue laoreet, cursus metus eget, posuere diam. Vivamus ultrices non metus " +
        "a interdum.Phasellus sagittis dui a arcu dapibus, quis maximus ipsum efficitur. " +
        "Quisque porta venenatis orci, sit amet egestas elit aliquam sed. Nulla facilisis" +
        " eget nunc sit amet interdum. Donec eu hendrerit tortor, id dapibus odio. Intege" +
        "r ut lobortis eros. Fusce eleifend orci id urna sodales blandit. Sed gravida fel" +
        "is sit amet eros ullamcorper dapibus. Aliquam massa turpis, facilisis vitae tort" +
        "or ac, finibus rhoncus ligula. Ut finibus posuere libero, eu laoreet ex facilisi" +
        "s sit amet. Donec bibendum quis felis eu tristique. Nulla dictum porttitor bland" +
        "it. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cub" +
        "ilia curae;"
  }
]

export default class NewsService{
  getNews=()=>{
    return new Promise(resolve=>setTimeout(()=>resolve(news),2000))
  }

  getArticle=(id)=>{
    const article = news.findIndex(item=>item.id===id);
   return new Promise(resolve=>setTimeout(()=>resolve(article),2000))
  }
}