#include<iostream>
#include<vector>
#include<map>
using namespace std;
main()
{
    vector <int>nums1{1,2,3,0,0,0};
    vector <int>nums2{2,5,6};
    int m = 3, n = 3;
    int i=0,j=0;
    vector <int>res;
    while(i<m&&j<n)
    {
        if(nums1[i]<=nums2[j])
        {
            res.push_back(nums1[i++]);
        }
        else
        {
             res.push_back(nums2[j++]);
        }
    }
    while(i<m)
         res.push_back(nums1[i++]);
    while(j<n)
        res.push_back(nums2[j++]);
    nums1.clear();
    for(int l=0;l<m+n;l++)
       nums1.push_back(res[l]);
    for(int t=0;t<m+n;t++)
        cout<<nums1[t]<<endl;
}
