var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let x = nums1.length;
  let y = nums2.length;

  let low = 0;
  let high = x;
  while (low <= high) {
    let partitionX = ((low + high) / 2) | 0;
    let partitionY = (((x + y + 1) / 2) | 0) - partitionX;

    //if partitionX is 0 it means nothing is there on left side. Use -INF for maxLeftX
    //if partitionX is length of input then there is nothing on right side. Use +INF for minRightX
    let maxLeftX = partitionX == 0 ? -Number.MAX_VALUE : nums1[partitionX - 1];
    let minRightX = partitionX == x ? Number.MAX_VALUE : nums1[partitionX];

    let maxLeftY = partitionY == 0 ? -Number.MAX_VALUE : nums2[partitionY - 1];
    let minRightY = partitionY == y ? Number.MAX_VALUE : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      console.log('here2');
      if ((x + y) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        console.log('here');
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      console.log('here3');
      high = partitionX - 1;
    } else {
      console.log('here4', low, partitionX + 1);
      low = partitionX + 1;
    }
  }
};

console.log(findMedianSortedArrays([1, 2, 6], [3, 4, 5]));
