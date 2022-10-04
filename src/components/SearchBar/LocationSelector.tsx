import { forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import { styled } from '@stitches/config';
import Stack from '@components/Stack';
import Text from '@components/Text';
import PinIcon from '@components/icons/Pin';
import SelectorIcon from '@components/icons/Selector';

export const LocationSelector = forwardRef<any, Select.SelectProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledLocationWrapper>
        <Select.Root {...props}>
          <StyledTrigger ref={forwardedRef}>
            <Stack align="center" css={{ spaceX: 4 }}>
              <PinIcon size={24} />
              <Text weight="medium">
                <Select.Value />
              </Text>
              <SelectorIcon />
            </Stack>
          </StyledTrigger>
          <Select.Portal>
            <StyledContent>
              <Select.Viewport>{children}</Select.Viewport>
            </StyledContent>
          </Select.Portal>
        </Select.Root>
      </StyledLocationWrapper>
    );
  }
);

export const LocationSelectorItem = forwardRef<any, Select.SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledSelectItem {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
      </StyledSelectItem>
    );
  }
);

const StyledLocationWrapper = styled('div', {
  position: 'relative',
});

const StyledTrigger = styled(Select.Trigger, {
  all: 'unset',
  px: 12,
  py: 8,
});

const StyledContent = styled(Select.Content, {
  position: 'relative',
  zIndex: 9999,
  background: '$white',
  borderRadius: 8,
  border: '1px solid $slate300',
});

const StyledSelectItem = styled(Select.Item, {
  px: 8,
  py: 6,
  outline: '0 none',
  '&:hover': {
    background: '$slate50',
  },
});
