import Card from "react-bootstrap/Card";

const GithubCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem', margin: "auto", border: "1px solid black", borderRadius: "10px"}}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5x5jFaHqeF08ahnrs1210Jq9DqbszyZeIQ&usqp=CAU" />
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bold", fontSize: "1.5em"}}>Gustavo0623</Card.Title>
                    <Card.Text>
                        I am a jr. software developer looking for work!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GithubCard