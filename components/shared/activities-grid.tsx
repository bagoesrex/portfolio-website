import LastPlayed from "./last-played"

export default function ActivitiesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LastPlayed />
        </div>
    )
}