const { MediaUpload, MediaUploadCheck , InspectorControls } = wp.blockEditor;
const { ResponsiveWrapper,Button , PanelBody } = wp.components;
const { Fragment } = wp.element;

export default function Banner(props) {
	const { attributes, setAttributes } = props;

    const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});
	}

    const blockStyle = {
		backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
	};

    const removeMedia = () => {
        props.setAttributes({
            mediaId: 0,
            mediaUrl: ''
        });
    }
 
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={'Select block background image'}
					initialOpen={ true }
				>
					<div className="editor-post-featured-image">						
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectMedia}
                                value={attributes.mediaId}
                                allowedTypes={ ['image'] }
                                render={({open}) => (
                                    <Button 
                                        className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                                        onClick={open}
                                    >
                                        {attributes.mediaId == 0 && 'Choose an image'}
                                        {props.media != undefined && 
                                            <ResponsiveWrapper
                                                    naturalWidth={ props.media.media_details.width }
                                                naturalHeight={ props.media.media_details.height }
                                                >
                                                    <img src={props.media.source_url} />
                                                </ResponsiveWrapper>
                                        }
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        {attributes.mediaId != 0 && 
                            <MediaUploadCheck>
                                <Button onClick={removeMedia} isLink isDestructive>{'Remove image'}</Button>
                            </MediaUploadCheck>
                        }
					</div>
				</PanelBody>
			</InspectorControls>
			<div style={blockStyle}>
				... Your banner image here...
			</div>
		</Fragment>
	);
}