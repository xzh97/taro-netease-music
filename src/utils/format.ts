import dayjs from 'dayjs'

export const formatDate = (date = new Date(), formatStr = 'YYYY-MM-DD hh:mm:ss') => {
    return dayjs(date).format(formatStr)
}