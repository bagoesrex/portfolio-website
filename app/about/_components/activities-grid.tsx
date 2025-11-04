import LastPlayed from "../../../components/shared/last-played"
import LastReading from "../../../components/shared/last-reading"

export default function ActivitiesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LastPlayed />
            <LastReading />
        </div>
    )
}