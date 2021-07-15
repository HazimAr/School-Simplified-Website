/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
import { useEffect, useRef } from "react";

export default function useInterval(callback: any, delay: number): any {
	const savedCallback: any = useRef();

	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		if (delay) {
			const id = setInterval(() => savedCallback.current(), delay);
			return () => {
				clearInterval(id);
			};
		}
	}, [delay]);
}
