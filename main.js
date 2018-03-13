
function fillForm(){
	var topic = document.getElementById('topic').value ;
	var formText = document.getElementById(`formText`).value

	var topicText = document.createTextNode('Topic: ' + topic)
	var commentText = document.createTextNode('Express Here: ' + formText)

	var listItem = document.createElement('li')
	listItem.className = 'list-group'

	var newTopicText = document.createElement('H5')
	newTopicText.appendChild(topicText)

	var newComment = document.createElement('P')
	newComment.appendChild(commentText)

	listItem.appendChild(newTopicText)
	listItem.appendChild(newComment)
	document.getElementById('info').appendChild(listItem)



}