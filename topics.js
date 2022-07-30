class Article {
    constructor(title,date,url,topics){
        this.title = title;
        this.date = date;
        this.url = url;
        this.topics = topics;
    }
}
let MakeArticle;
let articles , reqtext;
let article_list = document.getElementById('articles');
articles = new Array;
MakeArticle = x => {
    for(let i = 0; i < x.length;i++){
        articles.push(new Article(x[i].Title,x[i].Date,x[i].Url,x[i].Topics))
    }
    return articles
}
reqtext = async (text) => {
    let y = await fetch(text);
    return y.json();
}
reqtext('./articles.json').then(x => MakeArticle(x)).then(r => r.forEach(j => {
        article_list.innerHTML += `<tr>
            <td style="text-align:center;">${j.date}</td>
            <td style="text-align:center;"><a href="${j.url}">${j.title}</a></td>
            <td style="text-align:center;">${j.topics}</td></tr>`
}));
