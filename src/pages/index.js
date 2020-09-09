import React from "react";
import theme from "theme";
import { Theme, Icon } from "@quarkly/widgets";
import { MdAndroid } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Icon category="md" icon={MdAndroid} size="64px" />
	</Theme>;
});