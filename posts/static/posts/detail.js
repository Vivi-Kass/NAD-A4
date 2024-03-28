const backBtn = document.getElementById('back-btn')
const url = window.location.href + 'data/'
const spinnerBox = document.getElementById('spinner-box')
const updateBtn = document.getElementById('update-btn')
const deleteBtn = document.getElementById('delete-btn')

backBtn.addEventListener('click', ()=>{
    history.back()
})


$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(response.data)
        const data = response.data

        if (data.logged_in !== data.author){
            console.log('different')
        }
        else{
            console.log('same')
            deleteBtn.classList.remove('not-visible')
            updateBtn.classList.remove('not-visible')
        }

        spinnerBox.classList.add('not-visible')
    },
    error: function(error){
        console.log("Error",error)
    }
})