import { IconType } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as DiIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as HiIcons from "react-icons/hi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";

const iconList: Record<string, IconType>[] = [
	FaIcons,
	SiIcons,
	ImIcons,
	HiIcons,
	AiIcons,
	BsIcons,
	BiIcons,
	DiIcons,
	FiIcons,
	FcIcons,
	GiIcons,
	GoIcons,
	IoIcons,
	Io5Icons,
	MdIcons,
	RiIcons,
	TiIcons,
	VscIcons,
	WiIcons,
	CgIcons,
];

export default function fetchIcon(iconName: string) {
	for (const iconCollection of iconList) {
		const temp = iconCollection[iconName];
		if (temp) return temp;
	}
	return FaIcons.FaQuestionCircle;
}
