export function transformBoolToString(bool: boolean) {
	if (bool) {
		return "false";
	}
	return "true";
}
