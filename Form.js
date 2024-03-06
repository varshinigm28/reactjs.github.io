function Form(){
    return(
        <div>
            <form>
        <h1>FORM</h1>
        <label for="name">Name </label>
        <input id="name" type="text"/><br/><br/>
        <label>DOB <input type="date" /></label><br/><br/>
        <label>Address <textarea cols="20" rows="4"></textarea></label><br/><br/>
        <label>Gender <input type="radio" name="a"/>Male<input type="radio" name="a"/>Female</label><br/><br/>
        <label>Subject <input type="checkbox"/>Math<input type="checkbox"/>Science<input type="checkbox"/>English</label><br/><br/>
        <label>Roll Number <input type="number"/></label><br/><br/>
        <label>Submit <input type="submit"/></label><br/><br/>
    </form>
        </div>
    );
}
export default Form;