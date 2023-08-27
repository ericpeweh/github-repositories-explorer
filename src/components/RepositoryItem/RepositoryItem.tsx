// Styles
import {
	RepositoryDescription,
	RepositoryHeader,
	RepositoryItemContainer,
	RepositoryLink,
	RepositoryName,
	RepositoryStargazer
} from "./RepositoryItem.styles";

// Icons
import IconStar from "../../assets/icons/IconStar";

// Types
import { IRepository } from "../../types/common/repositories";

interface IRepositoryItemProps {
	repoData: IRepository;
}

/**
 * Repository list item's component
 * @param {IRepositoryItemProps} props Component props
 * @param {IRepository} props.repoData Repository item data to display
 */
const RepositoryItem = ({ repoData }: IRepositoryItemProps) => {
	const { name, stargazers_count: starsCount, description, html_url } = repoData;

	return (
		<RepositoryItemContainer>
			<RepositoryLink href={html_url} target="_blank" referrerPolicy="no-referrer">
				<RepositoryHeader>
					<RepositoryName>{name}</RepositoryName>
					<RepositoryStargazer>
						{starsCount}
						<IconStar />
					</RepositoryStargazer>
				</RepositoryHeader>
				<RepositoryDescription>{description || "No description provided."}</RepositoryDescription>
			</RepositoryLink>
		</RepositoryItemContainer>
	);
};

export default RepositoryItem;
