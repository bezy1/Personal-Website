class Article {
    constructor(title,date,url,topics){
        this.title = title;
        this.date = date;
        this.url = url;
        this.topics = topics;
    }
}
let MakeArticle , Exist;
let articles , reqtext ,topics,article_list,topics_list;
topics_list = document.getElementById('topics');
article_list = document.getElementById('articles-list');
articles = new Array;
topics = new Set;
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
reqtext('articles.json').then(x => MakeArticle(x)).then(r => r.reverse().forEach((j,i) => {
    if(!(i >= 5)){
        article_list.innerHTML += `<li class="article"><a href="${j.url}">${j.title}</a></li>`
}}));
