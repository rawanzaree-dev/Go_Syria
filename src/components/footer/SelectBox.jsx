export default function Footer({arr, label}) {
    return (
        <div className="select-box">
            <label htmlFor={arr}>{label}</label>
            <select name={arr} id={arr}>
                {arr.map(item => <option value={item.value}>{item.value}</option>)}
            </select>
        </div>
    );
}