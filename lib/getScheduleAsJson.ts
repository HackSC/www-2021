import csvToJson from 'csvtojson'
import path from 'path'

export interface Event {
    date: string,
    startTime: string,
    endTime: string,
    link: string,
    name: string,
}

/** Converts D&I CSV to JSON. Only to be run at buildtime, so only include in getStatic* calls with Next.js */
export const getScheduleAsJson = async () => {
    // Because of https://github.com/vercel/next.js/issues/8251, needs to be from root directory
    const scheduleCsvPath = path.resolve('lib/data/di_schedule.csv');
    const json = await csvToJson().fromFile(scheduleCsvPath)
    const events = new Array<Event>();

    for (let event of json) {
        events.push({
            date: event.Date || null,
            startTime: event['Start time'] || null,
            endTime: event['Ending time'] || null,
            link: event['Meeting Link'] || null,
            name: event.Event || null
        })
    }

    return events;
}
