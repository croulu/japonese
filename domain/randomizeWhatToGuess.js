export const randomizeWhatToGuess = () =>
{
    //console.log("ici dans randomize");
    return Math.floor(Math.random() * 2) === 0 ? "kana" : "romanji";
}
