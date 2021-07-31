import teamStyles from '../styles/Team.module.css';

const Team = () => {
    return (
        <div className={teamStyles.container}>
            <h1>Team</h1>
            <h3 className={teamStyles.subtitle}>Thanks to our amazing team members that made The Orpheus Show possible!</h3>
            <ul className={teamStyles.teamList}>
                <li className={teamStyles.teamMember}>
                    <img src="/team-members/arav.jfif" className={teamStyles.teamPFP}/>
                    <div className={teamStyles.info}>
                        <h3 className={teamStyles.teamName}>Arav</h3>
                        <h4 className={teamStyles.teamDesc}>Host</h4>
                    </div>
                </li>
                <li className={teamStyles.teamMember}>
                    <img src="/team-members/deven.jpeg" className={teamStyles.teamPFP}/>
                    <div className={teamStyles.info}>
                        <h3 className={teamStyles.teamName}>Deven</h3>
                        <h4 className={teamStyles.teamDesc}>Operations</h4>
                    </div>
                </li>
                <li className={teamStyles.teamMember}>
                    <img src="/team-members/arc.jpe" className={teamStyles.teamPFP}/>
                    <div className={teamStyles.info}>
                        <h3 className={teamStyles.teamName}>Arcade</h3>
                        <h4 className={teamStyles.teamDesc}>Development</h4>
                    </div>
                </li>
                <li className={teamStyles.teamMember}>
                    <img src="/team-members/warren.png" className={teamStyles.teamPFP}/>
                    <div className={teamStyles.info}>
                        <h3 className={teamStyles.teamName}>Warren</h3>
                        <h4 className={teamStyles.teamDesc}>Development</h4>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Team;