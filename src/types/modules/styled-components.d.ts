// Types
import "styled-components";
import { IMainTheme } from "../../styles/theme";

declare module "styled-components" {
	export interface DefaultTheme extends IMainTheme {}
}
