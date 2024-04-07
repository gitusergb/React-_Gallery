import React from 'react'
import {Component} from 'react'
import ThumbnailItem from './Thumb/Thumb'
import styled from "styled-components";

const imagesList = [
  {
    id: 0,
    imageUrl1:
      'https://assets.burberry.com/is/image/Burberryltd/69155632-A7E5-411C-94AB-EB24DC0983AF?$BBY_V2_ML_1x1$&wid=1876&hei=1876',
      imageUrl2:
      'https://assets.burberry.com/is/image/Burberryltd/191B2FB7-706A-4C25-ADD6-F8FBA70AE65E?$BBY_V2_ML_1x1$&wid=1876&hei=1876',
      thumbnailUrl:
      'https://assets.burberry.com/is/image/Burberryltd/E7B65DA1-8216-46C6-8B4B-7E193AA329F1?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageAltText: 'Exaggerated Check Cotton Shirt',
    thumbnailAltText: 'A slim-fit shirt containing organic cotton, highlighted with our Exaggerated Check and trimmed with silk.',
  },
  {
    id: 1,
    imageUrl1: 'https://assets.burberry.com/is/image/Burberryltd/45C450BA-A699-429A-8D4D-74365035080C?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageUrl2: 'https://assets.burberry.com/is/image/Burberryltd/E17A72CE-0847-4F2B-BDD5-8C67EB44A441?$BBY_V2_ML_1x1$&wid=1876&hei=1876',
    thumbnailUrl:
      'https://assets.burberry.com/is/image/Burberryltd/3D6DC5F8-3143-4D9B-A971-F3DB9CE401AC?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageAltText: 'Rabbit Quilted Leather Small Lola Bag',
    thumbnailAltText: 'Rabbit Quilted Leather Small Lola Bag',
  },
  {
    id: 2,
    imageUrl1:
      'https://assets.burberry.com/is/image/Burberryltd/7085CDDF-FA80-4F42-BF4B-0EE415F685DB?$BBY_V2_ML_1x1$&wid=1876&hei=1876',
      imageUrl2:
      'https://assets.burberry.com/is/image/Burberryltd/750C8D71-3F64-4A97-AD40-62B642523B5C?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    thumbnailUrl:
      'https://assets.burberry.com/is/image/Burberryltd/EAEC957A-581E-4C28-ADAD-1C9F30E59535?$BBY_V2_ML_1x1$&wid=1876&hei=1876',
    imageAltText: 'Rabbit Print Cotton Hoodie',
    thumbnailAltText: 'Rabbit Print Cotton Hoodie thumbnail',
  },
  {
    id: 3,
    imageUrl1:
      'https://assets.burberry.com/is/image/Burberryltd/717E582F-097B-48DB-B169-F41751FA836C?$BBY_V2_ML_1x1$&wid=1876&hei=1876',
      imageUrl2:
      'https://assets.burberry.com/is/image/Burberryltd/FE4F32C9-B856-4BBE-88DA-13ADBD0B40CB?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    thumbnailUrl:
      'https://assets.burberry.com/is/image/Burberryltd/509948F1-D93A-4A7A-871D-32B2BBCE8FCE?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageAltText: 'Rabbit Print Silk Square Scarf',
    thumbnailAltText: 'Rabbit Print Silk Square Scarf thumbnail',
  },
  {
    id: 4,
    imageUrl1: 'https://assets.burberry.com/is/image/Burberryltd/8A1B63BF-0437-4CF2-AAD0-E373FE4D303F?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageUrl2:
      'https://assets.burberry.com/is/image/Burberryltd/7F317A01-D30B-4F87-B605-7B2092B87FE8?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    thumbnailUrl:
      'https://assets.burberry.com/is/image/Burberryltd/A89748A6-9842-4034-937E-60DAE128AA05?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageAltText: 'Embroidered Logo Check Cotton Baseball Cap',
    thumbnailAltText: 'Embroidered Logo Check Cotton Baseball Cap thumbnail',
  },
  {
    id: 5,
    imageUrl1: 'https://assets.burberry.com/is/image/Burberryltd/4AEB34DE-33DA-4702-AB14-20D2731595F4?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageUrl2:
      'https://assets.burberry.com/is/image/Burberryltd/14E0F8C3-8B68-459D-B75D-723938B1B420?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    thumbnailUrl:
      'https://assets.burberry.com/is/image/Burberryltd/D937ACFA-DD2D-4848-B38E-366AD54844B1?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageAltText: 'Grainy Leather TB Bifold Wallet',
    thumbnailAltText: 'Grainy Leather TB Bifold Wallet thumbnail',
  },
  {
    id: 6,
    imageUrl1:
      'https://assets.burberry.com/is/image/Burberryltd/7744F2B3-4E6C-4F3F-8990-A3A77A774A97?$BBY_V2_ML_1x1$&wid=1876&hei=1876',
      imageUrl2:
      'https://assets.burberry.com/is/image/Burberryltd/20ED9FD4-8EAB-453E-ADD5-D779FD7DA78D?$BBY_V2_ML_1x1$&wid=1876&hei=1876',
    thumbnailUrl:
      'https://assets.burberry.com/is/image/Burberryltd/1BD3F880-970D-4C76-9141-1C25091A04DE?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageAltText: 'The Long Kensington Heritage Trench Coat',
    thumbnailAltText: 'The Long Kensington Heritage Trench Coat thumbnail',
  },
  {
    id: 7,
    imageUrl1: 'https://assets.burberry.com/is/image/Burberryltd/CD5806CB-4B2B-4DA3-8C6B-D2ADA6E2D24F?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageUrl2:
      'https://assets.burberry.com/is/image/Burberryltd/E7D70C5E-480A-474A-B6DE-17B9D44AE1C0?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    thumbnailUrl:
      'https://assets.burberry.com/is/image/Burberryltd/CD5806CB-4B2B-4DA3-8C6B-D2ADA6E2D24F?$BBY_V2_SL_1x1$&wid=1876&hei=1876',
    imageAltText: 'Leather Slim Denny Tote',
    thumbnailAltText: 'Leather Slim Denny Tote thumbnail',
  },
]


class Home extends Component  {
    // <div>Home</div>
    state = {activeTabId: imagesList[0].id}

    updateActiveTabId = id => {
      this.setState({activeTabId: id})
    }
  
    render() {
      const {activeTabId} = this.state
      const {imageUrl1,imageUrl2, imageAltText} = imagesList[activeTabId]
      return (
        <DIV>
        {/* // <div className="bg-con"> */}
        <div className="imagediv">
        <img src={imageUrl1} alt={imageAltText} className="image" />
        <img src={imageUrl2} alt={imageAltText} className="image" />
        </div>
         
          <h1 className="para-main">Burberry Product Photos Gallery</h1>
          <p> Photographs collection by Gauri</p>
  
          <ul className="list-items-main">
            {imagesList.map(eachObject => (
              <ThumbnailItem
                key={eachObject.id}
                eachObject={eachObject}
                isActive={activeTabId === eachObject.id}
                updateActiveTabId={this.updateActiveTabId}
              />
            ))}
          </ul>
        {/* </div> */}
        </DIV>
      )
    }
}

export default Home

const DIV = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  padding: 10px;

  .list-items-main {
  display: flex;
align-items: center;
}
.para-main {
  color: #1e293b;
  font-size: 25px;
}
.imagediv {
  height: 60vh;
  width: 80vw;
  display: flex;
  border-radius: 10px;
}
.image {
  height: 60vh;
  width: 40vw;
}
`;
