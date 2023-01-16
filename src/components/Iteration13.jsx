import profiles from '../data/berlin.json'

function FaceBook () {
    const profileArray = profiles.map((person, i) => {
        return (
            <li key={i}>
                <div className='FbCard'>
                    <img src={person.img} alt={person.firstName}/>
                </div>
                <div>
                    <p><b>First Name:</b> {person.firstName}</p>
                    <p><b>Last Name:</b> {person.lastName}</p>
                    <p><b>Country:</b> {person.country}</p>
                    <p><b>Type:</b> { person.isStudent ? "Student" : "Teacher" }</p>
                </div>
            </li>
        )
    })
    return (
        <div>
           {profileArray}
        </div>
    )
}

export default FaceBook;