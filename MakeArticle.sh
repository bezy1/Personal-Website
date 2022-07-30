#/bin/bash
help () {
		echo 'MakeArticle HTML STATICS-DIR TITLE [TOPICS]'
		exit 1
}
[ ${#} -ge 4 ] || help
ls $2 || help
html=$1
dir="$2"
title=$3
date=$(date -I)
topics=()
mkdir "./articles/$title/" -p
cp "$dir/"* "articles/$title/" || help
cp "$html" "articles/$title/$title.html" || help
shift
shift
shift
a=`expr ${#} - 1`
while [ ${#topics[@]} -le $a ]
do
		topics+=("$@")
		shift
done

obj="{'"Title"' : '"$title"' , '"Date"' : '"$date"' , '"Url"' : './articles/$title/$title.html' , 'Topics' : [`echo ${topics[*]} | sed 's/ /","/g' | sed 's/^/"/' | sed 's/$/"/'`]}"
obj=`echo $obj | sed 's/'\''/"/g'`
echo $(jq ". += [`echo $obj`]" articles.json) > articles.json
