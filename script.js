const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')


textarea.focus()

// textarea.addEventListener('keyup', (e) =>{
//     createTags(e.target.value)
// })

// function createTags(input){
//    const tags =input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())


//    tagsEl.innerHTML=''
//    tags.forEach(tag =>{
//        const tagEl =documen.createElement('span')
//        tagEl.classList.add('tag')
//        tagEl.innerHTML=tag
//        tagsEl.appendChild(tagEl)
//    })
// }

textarea.addEventListener('keyup', (e) =>{
        createTags(e.target.value)
    })
function createTags(input){
    console.log(input)
}