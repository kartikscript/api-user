//https://jsonplaceholder.typicode.com/users


const tableBody= document.getElementById('table-body')
const input = document.getElementById('input')

input.addEventListener('input',(e)=>{
  users.forEach(user=>{
    const el = document.getElementById(user.id)
    el.style.backgroundColor='white'

    if(e.target.value.trim()){
      const isNameExist = user.name.toLowerCase().includes(e.target.value.toLowerCase())
      isNameExist && (el.style.backgroundColor='#ddd')
    }
  })
})

async function getUsers(){
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error)
    }
}
const users =await getUsers()


users.forEach(user => {
  const addressArr =Object.values(user.address)
  addressArr.pop()
  const tr = document.createElement('tr')
  tr.classList.add('table-row')
  tr.id=user.id
  
    tr.innerHTML=`
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${addressArr.toString()}</td>
    `
  tableBody.append(tr)
});

