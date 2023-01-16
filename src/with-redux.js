function reducer(state, action) {
  if (state === undefined) {
    // initial state
    return { color: "yellow" };
  }
}
const store = Redux.createStore(reducer);
console.log(store.getState());

function red() {
  const state = store.getState();
  document.querySelector("#red").innerHTML = `
    <div clas="container" id="component_red" style="background-color: ${state.color}">
      <h1>red</h1>
      <input type="button" value="fire" onclick="
        document.querySelector('#component_red').style.backgroundColor = 'red';
        document.querySelector('#component_green').style.backgroundColor = 'red';
        document.querySelector('#component_blue').style.backgroundColor = 'red';
      ">
    </div>
  `;
}

red();
