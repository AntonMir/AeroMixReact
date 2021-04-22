// кладем в переменную тип нашего action
export const CLOSE_HEADER_NAV = "CLOSE_HEADER_NAV"

// Функция, которая содержит в себе тип и статус нашего Sidebar
export function closeHeader(status) {
	return {
		type: CLOSE_HEADER_NAV,
		status: status
	}
}