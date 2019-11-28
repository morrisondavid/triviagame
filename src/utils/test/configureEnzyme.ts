import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

//eslint-disable-next-line
const { toMatchImageSnapshot } = require("jest-image-snapshot");

configure({ adapter: new Adapter() });

expect.extend({ toMatchImageSnapshot });
