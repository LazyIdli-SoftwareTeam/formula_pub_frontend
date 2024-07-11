/* eslint-disable @typescript-eslint/no-unused-vars */
import LeaderboardLayout from './views/LeaderboardTournament/LeaderboardLayout/LeaderboardLayout';

function App() {
    const path = window.location.search;
    const pathInspector = new URLSearchParams(path);
    const eventId = pathInspector.get('eventId');
    const branchId = pathInspector.get('branchId');
    if (!eventId || !branchId) {
        return (
            <div>
                <span style={{ color: 'white', fontSize: '30px' }}>
                    Event id or branch id is required
                </span>
            </div>
        );
    }
    return <LeaderboardLayout />;
}

export default App;
