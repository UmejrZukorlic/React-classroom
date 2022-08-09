import style from "./Badge.css"
const Badge = (props) => {
    const {type} = props
    function getTypeUrl() {
        switch (type) {
            case "tip1":
                return"https://svgsilh.com/svg/2109235.svg";
            case "tip2":
                return"https://www.svgrepo.com/show/147000/badge-with-a-star.svg";
            case "tip3":
                return"https://www.iconpacks.net/icons/1/free-badge-icon-1361-thumb.png";
            case "tip4":
                return"http://cdn.onlinewebfonts.com/svg/img_552359.png";
            case "tip5":
                return"http://cdn.onlinewebfonts.com/svg/img_532843.png";
            default:
                break;
        }
    }
    function openUrl() {
        window.open(getTypeUrl(),"_blank")
    }
    return <div className={style.badge} onClick={openUrl}>
        <img src={getTypeUrl()} alt="badge" />
    </div>
}
export default Badge