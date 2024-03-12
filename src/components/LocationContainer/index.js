import {
  LocationCardContainer,
  Heading,
  HeadingDescriptionContainer,
  Paragraph,
  Image,
  List,
} from './styledComponents'

import './index.css'

const LocationContainer = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData
  return (
    <List>
      <LocationCardContainer>
        <Image src={imageUrl} alt={name} />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </List>
  )
}

export default LocationContainer
