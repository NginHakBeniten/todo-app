import Proxy from './BaseProxy';

class TodoProxy extends Proxy {

  constructor (parameters = {}) {
    super('todo', parameters);
  }

  all = () => {
    return this.submit('get', `${this.endpoint}/`);
  }
}

export default TodoProxy;
