const HEAD = (
    <div 
        style={{
            width: "50px", 
            height: "50px", 
            borderRadius: "100%", 
            border: "10px solid black", 
            position: "absolute", 
            marginLeft: "160px",
            marginTop: "50px"
        }}
    />
)

const BODY = (
    <div 
        style={{
            width: "10px", 
            height: "120px", 
            background: "black",
            position: "absolute", 
            marginLeft: "190px",
            marginTop: "110px"
        }}
    />
)

const RIGHT_ARM = (
    <div 
        style={{
            width: "90px", 
            height: "10px", 
            background: "black",
            position: "absolute", 
            marginLeft: "190px",
            marginTop: "110px",
            rotate: "30deg",
            transformOrigin: "left bottom"
        }}
    />
)

const LEFT_ARM = (
    <div 
        style={{
            width: "90px", 
            height: "10px", 
            background: "black",
            position: "absolute", 
            marginLeft: "110px",
            marginTop: "110px",
            rotate: "-30deg",
            transformOrigin: "right bottom"
        }}
    />
)

const RIGHT_LEG = (
    <div 
        style={{
            width: "100px", 
            height: "10px", 
            background: "black",
            position: "absolute", 
            marginLeft: "190px",
            marginTop: "220px",
            rotate: "60deg",
            transformOrigin: "left bottom"
        }}
    />
)

const LEFT_LEG = (
    <div 
        style={{
            width: "100px", 
            height: "10px", 
            background: "black",
            position: "absolute", 
            marginLeft: "100px",
            marginTop: "220px",
            rotate: "-60deg",
            transformOrigin: "right bottom"
        }}
    />
)

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps){
    return (
        <>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", marginLeft: "190px" }} />
            <div style={{ height: "10px", width: "200px", background: "black"}} />
            <div style={{ height: "400px", width: "10px", background: "black",}} />
        </>
    )
}