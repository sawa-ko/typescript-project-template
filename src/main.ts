import dotEnv from 'dotenv';

const init = async () => {
  process.env.TS_MODE = Reflect.has(process, Symbol.for('ts-node.register.instance')) ? 'true' : 'false';
  dotEnv.config();
};

void init();
